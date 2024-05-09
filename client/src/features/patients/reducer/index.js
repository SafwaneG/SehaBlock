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
          helpers.validator.isArray(payload.patients) &&
          payload.patients.length > 0
        )
          payload.patients.forEach((patients, i) => {
            draft.patients[i] = patients;
          });
        break;

      case types.selectedSet:
        draft.selected = payload?.id;
        break;
      default:
        break;
    }
  });
};

export default reducer;
