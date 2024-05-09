import types from "../../actionsTypes";

export default function updated({ prescription }) {
  return { type: types.updated, payload: { prescription } };
}
