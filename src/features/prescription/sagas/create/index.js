import { takeLatest } from "redux-saga/effects";
import actionsTypes from "features/prescription/actionsTypes";
import worker from "./worker";
function* createPrescription() {
  yield takeLatest(actionsTypes.create, worker);
}

export default createPrescription;
