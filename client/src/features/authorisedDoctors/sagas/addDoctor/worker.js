import errorsActions from "store/errors/actions";
import loadingActions from "store/loading/actions";
import { put, call } from "redux-saga/effects";
import getContractInfo from "services/getContractInfo";
function* addWorker({ payload, meta = {} }) {
  const { account, contract } = yield call(getContractInfo, {
    contractName: "MedicalRecord",
  });


  yield put(errorsActions.cleaned());
  yield put(loadingActions.updated({ value: true }));
  const result = yield contract.methods
    .addAuthorisedDoctor(payload)
    .send({ from: account });
  console.log(result, "result");
  const event = result.events.authorisedDoctorevent.returnValues;

  if (event.isAdded) {
    yield put(
      errorsActions.updated({
        isSuccess: true,
        message: event.msg,
        show: true,
      })
    );
  } else {
    yield put(
      errorsActions.updated({
        isSuccess: false,
        message: event.msg,
        show: true,
      })
    );
  }
  yield put(loadingActions.updated({ value: false }));
}

export default addWorker;
