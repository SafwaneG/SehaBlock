const PHARMACY = "pharmacy ::: ";

export default Object.freeze({
  // for saga
  create: `${PHARMACY}create`,
  update: `${PHARMACY}update`,
  get: `${PHARMACY}get`,
  sign: `${PHARMACY}sign`,

  // for reducer
  updated: `${PHARMACY}updated`,
  merged: `${PHARMACY}merged`,
  selectedSet: `${PHARMACY}selected/set`,
  removed: `${PHARMACY}removed`,
  addDoctor: `${PHARMACY}addDoctor`,
});
