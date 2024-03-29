import { all } from "redux-saga/effects";
import getPatients from "./get";
export default function* saga() {
  yield all([getPatients()]);
}
