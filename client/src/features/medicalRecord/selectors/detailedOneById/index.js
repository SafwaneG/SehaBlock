import { memoize } from "proxy-memoize";
import selectAll from "../all";
import helpers from "helpers";

const detailedOneById = memoize(({ state, id }) => {
  const records = selectAll(state);

  const record = records[id];

  if (
    !helpers.validator.isObject(record) ||
    helpers.validator.isEmptyObject(record)
  )
    return null;

  return record;
});

export default detailedOneById;
