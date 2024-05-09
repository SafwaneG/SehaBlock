import { takeLatest } from "redux-saga/effects";
import actionsTypes from "features/authorisedDoctors/actionsTypes";
import worker from "./worker";
function* removeDoctor() {
  yield takeLatest(actionsTypes.remove, worker);
}

export default removeDoctor;
