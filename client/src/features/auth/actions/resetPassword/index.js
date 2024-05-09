import types from "../../actionsTypes";

export default function resetPassword({ email, meta = {} }) {
  return {
    type: types.resetPassword,
    payload: email,
    meta: { id: types.resetPassword, ...meta },
  };
}
