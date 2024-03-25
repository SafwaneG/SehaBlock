import { put, call } from "redux-saga/effects";

import loading from "store/loading";
import errors from "store/errors";
import actions from "../../actions";
import helpers from "helpers";
import config from "config";

export default function* resetPasswordWorker({ payload, meta = {} }) {
  yield put(errors.actions.updated({ isSuccess: true, id: meta.id }));
  let { data } = yield helpers.sagas.worker({
    method: "POST",
    url: config.endpoints.resetPassword,
    data: { email: payload },
    loadingId: meta.id,
  });
  yield put(loading.actions.updated({ value: true, id: meta.id }));

  if (data?.success) {
    yield put(
      errors.actions.updated({
        show: true,
        message: "Check your email to reset password",
        isSuccess: true,
      })
    );
  }
  yield put(loading.actions.updated({ value: false, id: meta.id }));
}
