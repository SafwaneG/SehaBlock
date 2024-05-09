import { takeLatest } from "redux-saga/effects";
import actionsTypes from "features/medicalRecord/actionsTypes";
import worker from "./worker";
function* addDoctor() {
  yield takeLatest(actionsTypes.addDoctor, worker);
}

export default addDoctor;