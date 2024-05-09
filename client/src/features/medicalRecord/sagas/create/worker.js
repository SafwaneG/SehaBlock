import actions from "features/medicalRecord/actions";
import errorsActions from "store/errors/actions";
import { put, select, call } from "redux-saga/effects";
import selectors from "features/medicalRecord/selectors";
import loadingActions from "store/loading/actions";
import getContractInfo from "services/getContractInfo";

function* createWorker({ payload, meta = {} }) {
  const { account, contract } = yield call(getContractInfo, {
    contractName: "MedicalRecord",
  });

  const records = yield select(selectors.all);
  const recordsArray = Object.values(records);
  yield put(errorsActions.cleaned());
  yield put(loadingActions.updated({ value: true }));
  const result = yield contract.methods
    .addRecord(
      payload.info.newRecord?.firstName,
      payload.info.newRecord?.lastName,
      payload.info.newRecord?.age
    )
    .send({ from: account });
  const event = result.events.recordCreated.returnValues;

  if (event.isCreated) {
    yield put(
      actions.merged({
        records: [
          ...recordsArray,
          {
            recordId: recordsArray.length + 1,
            Fname: payload.info.newRecord?.firstName,
            Lname: payload.info.newRecord?.lastName,
            age: payload.info.newRecord?.age,
            diagnostic: "",
            medicalObservation: "",
            diagnosticResult: "",
            treatement: "",
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

  console.log(result);
}
export default createWorker;
