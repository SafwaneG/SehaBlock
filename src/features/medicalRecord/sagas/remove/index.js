import { takeLatest } from "redux-saga/effects";
import actionsTypes from "features/usersManagement/actionsTypes";
import worker from "./worker";
function* updateRole() {
  yield takeLatest(actionsTypes.remove, worker);
}

export default updateRole;
