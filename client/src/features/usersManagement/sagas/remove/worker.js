import helpers from "helpers";
import config from "config";
import userActions from "features/usersManagement/actions";
import errorsActions from "store/errors/actions";
import { put } from "redux-saga/effects";
import { batchActions } from "redux-batched-actions";
function* removeWorker({ payload, meta = {} }) {
  yield put(errorsActions.cleaned());
  let { data } = yield helpers.sagas.worker({
    method: "DELETE",
    url: config.endpoints.users.delete,
    data: { id: payload },
    loadingId: meta.id,
  });

  if (data?.success) {
    const actions = [
      userActions.removed({ id: data?.deleted?.id }),
      errorsActions.updated({
        show: true,
        message: "User removed Successfully",
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

export default removeWorker;
