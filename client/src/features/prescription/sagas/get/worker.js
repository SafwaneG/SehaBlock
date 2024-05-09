import { put, select, call } from "redux-saga/effects";
import actions from "features/prescription/actions";
import errorsActions from "store/errors/actions";
import authSelectors from "features/auth/selectors";
import patientSelectors from "features/patients/selectors";
import loadingActions from "store/loading/actions";
import getContractInfo from "services/getContractInfo";

function* getWorker({ meta = {}, payload }) {
  const { account, contract } = yield call(getContractInfo, {
    contractName: "prescription",
  });
  const medContract = yield call(getContractInfo, {
    contractName: "MedicalRecord",
  });
  const medicalContract = medContract.contract;

  const patient = yield select(patientSelectors.detailedSelected);
  const user = yield select(authSelectors.user);
  yield put(errorsActions.cleaned());
  let result;
  yield put(loadingActions.updated({ value: true }));
  if (user?.userNature === "doctor") {
    result = yield contract.methods
      .getPrescriptionDetails(patient?.doctorAddress)
      .call({ from: account });
  } else if (user?.userNature === "patient") {
    result = yield contract.methods
      .getPrescriptionDetails(account)
      .call({ from: account });
  } else {
    result = yield contract.methods
      .getPrescriptionDetails(payload?.address)
      .call({ from: account });

    result = result.filter(
      (prescription) =>
        prescription?.signedByPatient === true &&
        prescription?.destroyPrescreption === false
    );
  }
  yield put(loadingActions.updated({ value: false }));

  const prescriptions = result.map((prescription) =>
    JSON.stringify(prescription, (key, value) => {
      if (typeof value === "bigint") {
        return value.toString();
      }
      return value;
    })
  );
  let medicalPrescription = [];

  for (let i = 0; i < prescriptions.length; i++) {
    const prescription = JSON.parse(prescriptions[i]);
    const patientDetails = yield medicalContract.methods
      .getUserInfo(prescription?.patient)
      .call({ from: account });
    const doctorDetails = yield medicalContract.methods
      .getUserInfo(prescription?.doctor)
      .call({ from: account });
    medicalPrescription[i] = {
      ...prescription,
      patientName: patientDetails[1],
      doctorName: doctorDetails[1],
    };
  }
  if (medicalPrescription.length == 0) {
    yield put(
      errorsActions.updated({
        isSuccess: false,
        message: "No prescription found for this patient",
        show: true,
      })
    );
  }
  yield put(
    actions.merged({
      prescriptions: [...medicalPrescription],
    })
  );
}
export default getWorker;
