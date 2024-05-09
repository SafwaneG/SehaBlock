import { all } from "redux-saga/effects";
import getAuthorisedDoctors from "./get";
import removeDoctor from "./remove";
import addDoctor from "./addDoctor";
export default function* saga() {
  yield all([
    getAuthorisedDoctors(),
    removeDoctor(),
    addDoctor(),
  ]);
}
