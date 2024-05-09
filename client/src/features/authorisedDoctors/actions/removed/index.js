import types from "../../actionsTypes";

export default function removed({ id }) {
  return { type: types.removed, payload: { id } };
}
