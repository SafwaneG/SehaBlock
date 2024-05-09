import errorsActions from "store/errors/actions";
import { put, select, call } from "redux-saga/effects";
import selectors from "features/authorisedDoctors/selectors";
import loadingActions from "store/loading/actions";
import actions from "features/authorisedDoctors/actions";
import getContractInfo from "services/getContractInfo";

function* removeWorker({ payload, meta = {} }) {
  const { account, contract } = yield call(getContractInfo, {
    contractName: "MedicalRecord",
  });

  
  yield put(errorsActions.cleaned());
  yield put(loadingActions.updated({ value: true }));
  const doctor = yield select(selectors.detailedSelected);
  const result = yield contract.methods
    .removeDoctor(doctor.doctorAddress)
    .send({ from: account });
  console.log(result, "result22");
  const event = result.events.removedDoctor.returnValues;
  yield put(loadingActions.updated({ value: false }));

  if (event.isRemoved) {
    yield put(actions.removed({ id: payload }));
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
}

export default removeWorker;
