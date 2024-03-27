import types from "../../actionsTypes";

export default function addDoctor({ doctorAddress }) {
  return {
    type: types.addDoctor,
    payload: doctorAddress,
  };
}
