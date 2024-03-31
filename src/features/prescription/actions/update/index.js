import types from "../../actionsTypes";

export default function update({ changes }) {
  return { type: types.update, payload: { changes } };
}
