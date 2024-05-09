import { put, call } from "redux-saga/effects";

import loading from "store/loading";
import errors from "store/errors";
import actions from "../../actions";
import helpers from "helpers";
import config from "config";

export default function* loginWorker({ payload, meta = {} }) {
  yield put(errors.actions.updated({ isSuccess: true, id: meta.id }));
  let { data } = yield helpers.sagas.worker({
    method: "POST",
    url: config.endpoints.login,
    data: payload,
    loadingId: meta.id,
  });
  yield put(loading.actions.updated({ value: true, id: meta.id }));

  if (data?.success) {
    if (data.user) {
      let userParams = {
        key: config.localStorage.userPersistKey,
        value: JSON.stringify(helpers.parser.user({ user: data.user })),
      };
      yield put(actions.userSet({ user: data.user }));
      yield call(helpers.persister.set, userParams);
    }

    if (data.token) {
      let tokenParams = {
        key: config.localStorage.tokenPersistKey,
        value: data.token?.token,
      };

      yield put(actions.tokenSet({ token: data.token?.token }));
      yield call(helpers.persister.set, tokenParams);
    }

    yield put(errors.actions.updated({ isSuccess: true, id: meta.id }));
  } else {
    yield put(
      errors.actions.updated({
        show: true,
        message: "Invalid credentials",
        isSuccess: false,
      })
    );
  }
  yield put(loading.actions.updated({ value: false, id: meta.id }));
}
