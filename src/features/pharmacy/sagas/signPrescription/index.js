import { takeLatest } from "redux-saga/effects";
import actionsTypes from "features/pharmacy/actionsTypes";
import worker from "./worker";
function* signMedication() {
  yield takeLatest(actionsTypes.sign, worker);
}

export default signMedication;
