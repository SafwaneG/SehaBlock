const RECORDS = "records ::: ";

export default Object.freeze({
  // for saga
  create: `${RECORDS}create`,
  update: `${RECORDS}update`,
  get: `${RECORDS}get`,

  // for reducer
  updated: `${RECORDS}updated`,
  merged: `${RECORDS}merged`,
  selectedSet: `${RECORDS}selected/set`,
  addDoctor: `${RECORDS}addDoctor`,
});
