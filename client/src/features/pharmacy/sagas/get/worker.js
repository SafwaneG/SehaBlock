import { put, select, call } from "redux-saga/effects";
import actions from "features/prescription/actions";
import errorsActions from "store/errors/actions";
import authSelectors from "features/auth/selectors";
import patientSelectors from "features/patients/selectors";
import getContractInfo from "services/getContractInfo";
function* getWorker({ meta = {}, payload }) {
  const { account, contract } = yield call(getContractInfo, {
    contractName: "prescription",
  });
  const medContract = yield call(getContractInfo, {
    contractName: "MedicalRecord",
  });

  const patient = yield select(patientSelectors.detailedSelected);
  const user = select(authSelectors.user);

  yield put(errorsActions.cleaned());
  let result;
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
  }
  console.log(result);

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
    const patientDetails = yield medContract.contract.methods
      .getUserInfo(prescription?.patient)
      .call({ from: account });
    const doctorDetails = yield medContract.contract.methods
      .getUserInfo(prescription?.doctor)
      .call({ from: account });
    medicalPrescription[i] = {
      ...prescription,
      patientName: patientDetails[1],
      doctorName: doctorDetails[1],
    };
  }
  console.log(medicalPrescription);
  yield put(
    actions.merged({
      prescriptions: [...medicalPrescription],
    })
  );
}
export default getWorker;
