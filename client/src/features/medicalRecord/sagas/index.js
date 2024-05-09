import { all } from "redux-saga/effects";
import getRecords from "./get";
import updateRecord from "./update";
import createRecord from "./create";
export default function* saga() {
  yield all([
    getRecords(),
    updateRecord(),
    createRecord(),
  ]);
}
