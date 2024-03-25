import { takeLatest } from "redux-saga/effects";
import actionsTypes from "features/usersManagement/actionsTypes";
import worker from "./worker";
function* createRole() {
  yield takeLatest(actionsTypes.create, worker);
}

export default createRole;
