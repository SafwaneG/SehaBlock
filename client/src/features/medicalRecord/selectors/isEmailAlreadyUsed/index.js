import { memoize } from "proxy-memoize";
import selectAll from "../all";

const isEmailAlreadyUsed = memoize(({ state, email }) => {
  const users = selectAll(state);

  const emails = Object.values(users).map((user) => user.email);

  if (emails.includes(email)) return true;

  return false;
});

export default isEmailAlreadyUsed;
