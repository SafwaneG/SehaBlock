import { all } from "redux-saga/effects";
import getRecords from "./get";
import updateRecord from "./update";
import signPrescription from "./signPrescription";
import createPrescription from "./create";
export default function* saga() {
  yield all([
    getRecords(),
    updateRecord(),
    signPrescription(),
    createPrescription(),
  ]);
}
