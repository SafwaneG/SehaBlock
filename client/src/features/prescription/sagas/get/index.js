import { takeLatest } from "redux-saga/effects";
import actionsTypes from "features/prescription/actionsTypes";
import worker from "./worker";

function* getRecords() {
  yield takeLatest(actionsTypes.get, worker);
}
export default getRecords;
