import { put } from "redux-saga/effects";
import actions from "features/usersManagement/actions";
import helpers from "helpers";
import config from "config";
import errorsActions from "store/errors/actions";
function* getWorker({ meta = {} }) {
  yield put(errorsActions.cleaned());
  let { data } = yield helpers.sagas.worker({
    method: "GET",
    url: config.endpoints.users.get,
    loadingId: meta.id,
  });
  if (data?.success) {
    const users = {};
    data?.found.map(
      (user) =>
        (users[user.id] = {
          id: user.id,
          firstname: user.firstname,
          lastname: user.lastname,
          telephone: user.telephone,
          email: user.email,
          serviceRole: user.serviceRole,
          role: user.role,
          grade: user.grade,
          service: user.service,
        })
    );
    yield put(actions.merged({ users: { ...users } }));
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
export default getWorker;
