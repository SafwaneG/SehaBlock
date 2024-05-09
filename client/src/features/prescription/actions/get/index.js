import types from "../../actionsTypes";

export default function get({ meta = {}, address } = {}) {
  return {
    type: types.get,
    meta: { id: types.get, ...meta },
    payload: { address },
  };
}
