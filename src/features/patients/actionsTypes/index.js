const PATIENTS = "patients ::: ";

export default Object.freeze({
  // for saga

  get: `${PATIENTS}get`,

  // for reducer
  merged: `${PATIENTS}merged`,
  selectedSet: `${PATIENTS}selected/set`,
});
