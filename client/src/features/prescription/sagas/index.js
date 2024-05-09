import { all } from "redux-saga/effects";
import getPrescription from "./get";
import signPrescription from "./signPrescription";
import createPrescription from "./create";
export default function* saga() {
  yield all([getPrescription(), signPrescription(), createPrescription()]);
}
