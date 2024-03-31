import { takeLatest } from "redux-saga/effects";
import actionsTypes from "features/prescription/actionsTypes";
import worker from "./worker";
function* updateRecord() {
  yield takeLatest(actionsTypes.update, worker);
}

export default updateRecord;
