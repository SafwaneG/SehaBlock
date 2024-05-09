import { memoize } from "proxy-memoize";
import selectAll from "../all";
import helpers from "helpers";

const detailedOneById = memoize(({ state, id }) => {
  const users = selectAll(state);

  const user = users[id];

  if (
    !helpers.validator.isObject(user) ||
    helpers.validator.isEmptyObject(user)
  )
    return null;

  return user;
});

export default detailedOneById;
