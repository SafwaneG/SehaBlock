import { combineReducers } from "redux";

import errors from "./errors";
import loading from "./loading";

import features from "../features";

const rootReducer = combineReducers({
  errors: errors.reducer,
  loading: loading.reducer,
  auth: features.auth.reducer,
  medicalRecord: features.medicalRecord.reducer,
  authorisedDoctors: features.authorisedDoctors.reducer,
  patients: features.patients.reducer,
});

export default rootReducer;
