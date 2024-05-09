import { put, call } from "redux-saga/effects";
import actions from "features/patients/actions";
import errorsActions from "store/errors/actions";
import getContractInfo from "services/getContractInfo";
function* getWorker({ meta = {} }) {
  const { account, contract } = yield call(getContractInfo, {
    contractName: "MedicalRecord",
  });

  yield put(errorsActions.cleaned());
  const result = yield contract.methods
    .getPatientAuthorisedInfo()
    .call({ from: account });

  console.log(result, "result");
  yield put(actions.merged({ patients: [...result] }));
}
export default getWorker;
