import { put, select, call } from "redux-saga/effects";
import actions from "features/medicalRecord/actions";
import errorsActions from "store/errors/actions";
import selectors from "features/auth/selectors";
import patientSelectors from "features/patients/selectors";
import getContractInfo from "services/getContractInfo";
function* getWorker({ meta = {} }) {
  const { account, contract } = yield call(getContractInfo, {
    contractName: "MedicalRecord",
  });

  const user = yield select(selectors.user);
  const patient = yield select(patientSelectors.detailedSelected);
  yield put(errorsActions.cleaned());
  let result;
  if (user?.userNature === "patient") {
    result = yield contract.methods.getAllRecord().call({ from: account });
  } else {
    result = yield contract.methods
      .getPatientRecord(patient?.doctorAddress)
      .call({ from: account });
  }
  const medicalRecordJSON = result.map((record) =>
    JSON.stringify(record, (key, value) => {
      if (typeof value === "bigint") {
        return value.toString();
      }
      return value;
    })
  );
  const medicalRecord = medicalRecordJSON.map((record) => JSON.parse(record));
  yield put(actions.merged({ records: [...medicalRecord] }));

  // yield put(actions.merged({ users: { ...users } }));
  // } else {
  //   yield put(
  //     errorsActions.updated({
  //       show: true,
  //       message: data?.errorMessage,
  //       isSuccess: false,
  //     })
  //   );
}

export default getWorker;
