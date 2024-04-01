import { memoize } from "proxy-memoize";
import selectAll from "../all";
import helpers from "helpers";

const detailedOneById = memoize(({ state, id }) => {
  const prescriptions = selectAll(state);

  const prescription = Object.values(prescriptions).filter(
    (prescription) => prescription.id === id
  );
  console.log("sle", prescription);
  if (
    !helpers.validator.isObject(prescription[0]) ||
    helpers.validator.isEmptyObject(prescription[0])
  )
    return null;

  return prescription[0];
});

export default detailedOneById;
