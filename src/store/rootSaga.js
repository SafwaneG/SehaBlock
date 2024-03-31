import { all } from "redux-saga/effects";

import features from "../features";

export default function* rootSaga() {
  yield all([
    features.medicalRecord.sagas(),
    features.authorisedDoctors.sagas(),
    features.patients.sagas(),
    features.prescription.sagas(),
  ]);
}
