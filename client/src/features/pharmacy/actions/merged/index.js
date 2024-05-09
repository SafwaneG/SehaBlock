import types from "../../actionsTypes";

export default function merged({ pharmacyPrescriptions }) {
  return { type: types.merged, payload: { pharmacyPrescriptions } };
}
