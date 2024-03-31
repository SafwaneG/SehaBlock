import { memoize } from "proxy-memoize";
import selectAll from "../all";
import helpers from "helpers";

const detailedOneById = memoize(({ state, id }) => {
  const prescriptions = selectAll(state);
  console.log(prescriptions, "prescriptions selec");

  const prescription = prescriptions[id];

  if (
    !helpers.validator.isObject(prescription) ||
    helpers.validator.isEmptyObject(prescription)
  )
    return null;

  return prescription;
});

export default detailedOneById;
