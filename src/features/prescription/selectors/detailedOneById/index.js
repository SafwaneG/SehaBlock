import { memoize } from "proxy-memoize";
import selectAll from "../all";
import helpers from "helpers";

const detailedOneById = memoize(({ state, id }) => {
  const prescriptions = selectAll(state);

  const prescription = Object.values(prescriptions).reduce(
    (prescription) => prescription.id === id
  );
  console.log("sle", prescription);
  if (
    !helpers.validator.isObject(prescription) ||
    helpers.validator.isEmptyObject(prescription)
  )
    return null;

  return prescription;
});

export default detailedOneById;
