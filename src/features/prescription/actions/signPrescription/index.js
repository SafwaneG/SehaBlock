import types from "../../actionsTypes";

export default function signPrescription({ id }) {
  return {
    type: types.signPrescription,
    payload: id,
  };
}
