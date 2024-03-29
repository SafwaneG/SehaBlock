import types from "../../actionsTypes";

export default function merged({ patients }) {
  return { type: types.merged, payload: { patients } };
}
