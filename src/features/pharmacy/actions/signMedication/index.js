import types from "../../actionsTypes";

export default function signMedication({ idPrescription, idMedication }) {
  return {
    type: types.sign,
    payload: { idPrescription, idMedication },
  };
}
