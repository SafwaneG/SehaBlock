import { memoize } from "proxy-memoize";
import selectAll from "../all";
import helpers from "helpers";

const isUsersFetched = memoize((state) => {
  const users = selectAll(state);
  if (helpers.validator.isEmptyObject(users)) return { isFirstFetch: true };
  else return { isFirstFetch: false };
});

export default isUsersFetched;
