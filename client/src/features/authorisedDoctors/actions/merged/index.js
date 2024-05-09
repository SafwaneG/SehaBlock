import types from "../../actionsTypes";

export default function merged({ authorisedDoctors }) {
  return { type: types.merged, payload: { authorisedDoctors } };
}
