import { takeLatest } from "redux-saga/effects";
import actionsTypes from "features/authorisedDoctors/actionsTypes";
import worker from "./worker";

function* getAuthorisedDoctors() {
  yield takeLatest(actionsTypes.get, worker);
}
export default getAuthorisedDoctors;
