import testState from "./initialState";

const prodstate = {
  selected: null,
  users: {},
};
export default function getInitialState() {
  return process.env.NODE_ENV === "production" ? prodstate : testState;
}
