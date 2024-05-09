import types from "../../actionsTypes";

export default function updated({ value, id }) {
  return {
    type: types.updated,
    payload: { value, id },
  };
}
