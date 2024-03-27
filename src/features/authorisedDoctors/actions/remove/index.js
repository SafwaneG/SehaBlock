import types from "../../actionsTypes";

export default function remove({ id }) {
  return {
    type: types.remove,
    payload: id,
  };
}
