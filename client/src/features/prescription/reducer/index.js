import types from "../actionsTypes";
import { produce } from "immer";
import helpers from "helpers";

import getInitialState from "../initialState";

const reducer = (state = getInitialState(), action) => {
  const { type, payload } = action;

  return produce(state, (draft) => {
    switch (type) {
      case types.merged:
        if (
          helpers.validator.isArray(payload.prescriptions) &&
          payload.prescriptions.length > 0
        )
          payload.prescriptions.forEach((prescription, i) => {
            draft.prescriptions[i] = prescription;
          });
        break;

      case types.updated:
        if (
          helpers.validator.isObject(payload?.prescription) &&
          !helpers.validator.isEmptyObject(payload?.prescription) &&
          !helpers.validator.isEmptyString(
            payload?.prescription?.prescriptionId
          )
        )
          draft.prescriptions[payload.prescription.prescriptionId - 1] =
            payload.record;
        break;

      case types.selectedSet:
        draft.selected = payload?.id;
        break;
      // case types.removed:
      //   delete draft.users[payload?.id];
      default:
        break;
    }
  });
};

export default reducer;
