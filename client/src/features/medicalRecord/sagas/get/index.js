import { takeLatest } from "redux-saga/effects";
import actionsTypes from "features/medicalRecord/actionsTypes";
import worker from "./worker";

function* getRecords() {
  yield takeLatest(actionsTypes.get, worker);
}
export default getRecords;
