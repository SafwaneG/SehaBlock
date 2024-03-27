const RECORDS = "records ::: ";

export default Object.freeze({
  // for saga
  create: `${RECORDS}create`,
  update: `${RECORDS}update`,
  get: `${RECORDS}get`,
  remove: `${RECORDS}remove`,

  // for reducer
  updated: `${RECORDS}updated`,
  merged: `${RECORDS}merged`,
  selectedSet: `${RECORDS}selected/set`,
  removed: `${RECORDS}removed`,
  addDoctor: `${RECORDS}addDoctor`,
});
