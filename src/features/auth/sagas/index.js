import { all } from "redux-saga/effects";

import login from "./login";
import setup from "./setup";
import logout from "./logout";
import resetPassword from "./resetPassword";
export default function* authSaga() {
  yield all([login(), setup(), logout(), resetPassword()]);
}
