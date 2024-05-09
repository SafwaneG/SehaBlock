import { takeLatest } from "redux-saga/effects";
import actionsTypes from "features/prescription/actionsTypes";
import worker from "./worker";
function* signPrescription() {
  yield takeLatest(actionsTypes.signPrescription, worker);
}

export default signPrescription;
