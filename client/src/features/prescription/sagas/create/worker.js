import actions from "features/prescription/actions";
import errorsActions from "store/errors/actions";
import { put, select, call } from "redux-saga/effects";
import selectors from "features/prescription/selectors";
import loadingActions from "store/loading/actions";
import getContractInfo from "services/getContractInfo";

function* createWorker({ payload, meta = {} }) {
  const { account, contract } = yield call(getContractInfo, {
    contractName: "prescription",
  });
  const medContract = yield call(getContractInfo, {
    contractName: "MedicalRecord",
  });
  const medicalContract = medContract.contract;

  const prescriptions = yield select(selectors.all);
  yield put(errorsActions.cleaned());
  const medications = payload.info.newPrescription.medications.map(
    (medication) => {
      return [
        0,
        medication.medicationName,
        medication.quantity,
        medication.dosage,
        medication.signedByPharmacie,
      ];
    }
  );
  yield put(loadingActions.updated({ value: true }));
  const patientDetails = yield medicalContract.methods
    .getUserInfo(payload.info.newPrescription.patientAddress)
    .call({ from: account });
  const doctorDetails = yield medicalContract.methods
    .getUserInfo(account)
    .call({ from: account });

  const result = yield contract.methods
    .createPrescription(
      payload.info.newPrescription.patientAddress,
      medications
    )
    .send({ from: account });

  const event = result.events.PrescriptionCreated.returnValues;

  if (event.isCreated) {
    yield put(
      actions.merged({
        prescriptions: [
          ...Object.values(prescriptions),
          {
            id: Object.values(prescriptions).length,
            medications: payload.info.newPrescription.medications,
            patientName: patientDetails[1],
            doctorName: doctorDetails[1],
            signedByDoctor: true,
          },
        ],
      })
    );
    yield put(
      errorsActions.updated({
        isSuccess: true,
        message: event.msg,
        show: true,
      })
    );
  }

  yield put(loadingActions.updated({ value: false }));
  console.log(result, "result");
}
export default createWorker;
