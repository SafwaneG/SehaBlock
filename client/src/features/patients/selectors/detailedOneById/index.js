import { memoize } from "proxy-memoize";
import selectAll from "../all";
import helpers from "helpers";

const detailedOneById = memoize(({ state, id }) => {
  const authDoctors = selectAll(state);

  const authDoctor = authDoctors[id];

  if (
    !helpers.validator.isObject(authDoctor) ||
    helpers.validator.isEmptyObject(authDoctor)
  )
    return null;

  return authDoctor;
});

export default detailedOneById;
