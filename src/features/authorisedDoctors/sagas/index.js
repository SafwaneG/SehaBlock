import { all } from "redux-saga/effects";
import getAuthorisedDoctors from "./get";
import updateRole from "./update";
import removeDoctor from "./remove";
import createRecord from "./create";
export default function* saga() {
  yield all([
    getAuthorisedDoctors(),
    updateRole(),
    removeDoctor(),
    createRecord(),
  ]);
}
