import errorsActions from "store/errors/actions";
import userActions from "features/usersManagement/actions";
import { put } from "redux-saga/effects";
import helpers from "helpers";
import config from "config";
import { batchActions } from "redux-batched-actions";
function* updateWorker({ payload, meta = {} }) {
  yield put(errorsActions.cleaned());
  let { data } = yield helpers.sagas.worker({
    method: "PUT",
    url: config.endpoints.users.update,
    loadingId: meta.id,
    data: payload?.changes,
  });
  if (data?.success) {
    const actions = [
      userActions.updated({ user: data?.updated }),
      errorsActions.updated({
        show: true,
        message: "User Updated Successfully",
        isSuccess: true,
      }),
    ];
    yield put(batchActions(actions));
  } else {
    yield put(
      errorsActions.updated({
        show: true,
        message: data?.errorMessage,
        isSuccess: false,
      })
    );
  }
}
export default updateWorker;
