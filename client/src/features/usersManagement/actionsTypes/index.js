const USERS = "users ::: ";

export default Object.freeze({
  // for saga
  create: `${USERS}create`,
  update: `${USERS}update`,
  get: `${USERS}get`,
  remove: `${USERS}remove`,

  // for reducer
  updated: `${USERS}updated`,
  merged: `${USERS}merged`,
  selectedSet: `${USERS}selected/set`,
  removed: `${USERS}removed`,
});
