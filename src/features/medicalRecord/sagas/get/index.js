import { takeLatest } from "redux-saga/effects";
import actionsTypes from "features/usersManagement/actionsTypes";
import worker from "./worker";

function* getRoles() {
  yield takeLatest(actionsTypes.get, worker);
}
export default getRoles;
