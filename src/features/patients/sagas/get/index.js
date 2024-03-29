import { takeLatest } from "redux-saga/effects";
import actionsTypes from "features/patients/actionsTypes";
import worker from "./worker";

function* getPatients() {
  yield takeLatest(actionsTypes.get, worker);
}
export default getPatients;
