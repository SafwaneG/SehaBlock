import helpers from "helpers";
import config from "config";
import userActions from "features/usersManagement/actions";
import errorsActions from "store/errors/actions";
import { put } from "redux-saga/effects";
import { batchActions } from "redux-batched-actions";
function* createWorker({ payload, meta = {} }) {
  yield put(errorsActions.cleaned());
  let { data } = yield helpers.sagas.worker({
    method: "POST",
    url: config.endpoints.users.create,
    loadingId: meta.id,
    data: payload.info.newUser,
  });
  if (data?.success) {
    const actions = [
      userActions.updated({ user: data?.added }),
      errorsActions.updated({
        show: true,
        message: "User Created Successfully",
        isSuccess: true,
      }),
    ];
    yield put(batchActions(actions));
  } else {
    yield put(
      errorsActions.updated({
        show: true,
        message: data.errorMessage,
        isSuccess: false,
      })
    );
  }
}
export default createWorker;
