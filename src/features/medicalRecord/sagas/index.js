import { all } from "redux-saga/effects";
import getRecords from "./get";
import updateRecord from "./update";
import removeRole from "./remove";
import createRecord from "./create";
import addDoctor from "./addDoctor";
export default function* saga() {
  yield all([
    getRecords(),
    updateRecord(),
    removeRole(),
    createRecord(),
    addDoctor(),
  ]);
}
