import { all } from "redux-saga/effects";
import getRecords from "./get";
import signMedication from "./signPrescription";
export default function* saga() {
  yield all([getRecords(), signMedication()]);
}
