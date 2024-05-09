import types from "../../actionsTypes";

export default function updated({ record }) {
  return { type: types.updated, payload: { record } };
}
