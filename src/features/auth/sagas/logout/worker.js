import { put, call } from "redux-saga/effects";

import helpers from "helpers";
import config from "config";
import actions from "../../actions";

export default function* logoutWorker() {
  let userParams = { key: "user" };

  yield call(helpers.persister.remove, userParams);

}
