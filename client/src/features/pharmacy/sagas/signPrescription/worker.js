import errorsActions from "store/errors/actions";
import { put, select, call } from "redux-saga/effects";
import loadingActions from "store/loading/actions";
import selectors from "features/prescription/selectors";
import actions from "features/prescription/actions";
import getContractInfo from "services/getContractInfo";
function* signMedication({ payload, meta = {} }) {
  const { account, contract } = yield call(getContractInfo, {
    contractName: "prescription",
  });

  yield put(errorsActions.cleaned());
  const prescriptions = yield select(selectors.all);
  const selectedPrescription = yield select(selectors.detailedSelected);
  const newPrescriptions = Object.values(prescriptions).map((prescription) => {
    if (prescription.id == payload.idPrescription) {
      const medications = prescription.medications.map((medication) => {
        if (medication.medicationId == payload.idMedication) {
          console.log("med");
          return { ...medication, signedbyPharmacie: true };
        }
        return medication;
      });

      return { ...prescription, medications };
    }
    return prescription;
  });

  yield put(errorsActions.cleaned());
  yield put(loadingActions.updated({ value: true }));
  const result = yield contract.methods
    .signMedication(
      selectedPrescription?.patient,
      payload.idPrescription,
      payload.idMedication
    )
    .send({ from: account });
  const event = result.events.prescriptionSigned.returnValues;
  console.log(event, "event");

  if (event.isSignedByPhramacy) {
    yield put(actions.merged({ prescriptions: [...newPrescriptions] }));
    yield put(
      errorsActions.updated({
        isSuccess: true,
        message: event.msg,
        show: true,
      })
    );
  }
  yield put(loadingActions.updated({ value: false }));
}

export default signMedication;
