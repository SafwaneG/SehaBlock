const AUTHRISEDDOCTORS = "authrisedDoctors ::: ";

export default Object.freeze({
  // for saga
  create: `${AUTHRISEDDOCTORS}create`,
  update: `${AUTHRISEDDOCTORS}update`,
  get: `${AUTHRISEDDOCTORS}get`,
  remove: `${AUTHRISEDDOCTORS}remove`,

  // for reducer
  updated: `${AUTHRISEDDOCTORS}updated`,
  merged: `${AUTHRISEDDOCTORS}merged`,
  selectedSet: `${AUTHRISEDDOCTORS}selected/set`,
  removed: `${AUTHRISEDDOCTORS}removed`,
  addDoctor: `${AUTHRISEDDOCTORS}addDoctor`,
});
