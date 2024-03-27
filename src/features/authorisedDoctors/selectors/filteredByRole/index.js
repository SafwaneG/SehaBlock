import { memoize } from "proxy-memoize";
import selectAll from "../all";

export default memoize(({ state, role }) => {
  let result = [];

  const all = selectAll(state);

  Object.entries(all).forEach(([_, user]) => {
    if (user.role === role) {
      result.push(user);
    }
  });

  return result;
});
