const PRESCRIPTION = "prescription ::: ";

export default Object.freeze({
  // for saga
  create: `${PRESCRIPTION}create`,
  update: `${PRESCRIPTION}update`,
  get: `${PRESCRIPTION}get`,
  signPrescription: `${PRESCRIPTION}signPrescription`,

  // for reducer
  updated: `${PRESCRIPTION}updated`,
  merged: `${PRESCRIPTION}merged`,
  selectedSet: `${PRESCRIPTION}selected/set`,
  removed: `${PRESCRIPTION}removed`,
  addDoctor: `${PRESCRIPTION}addDoctor`,
});
