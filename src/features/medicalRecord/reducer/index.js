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
          helpers.validator.isArray(payload.records) &&
          payload.records.length > 0
        )
          payload.records.forEach((record, i) => {
            draft.records[i] = record;
          });
        break;

      case types.updated:
        if (
          helpers.validator.isObject(payload?.record) &&
          !helpers.validator.isEmptyObject(payload?.record) &&
          !helpers.validator.isEmptyString(payload?.record?.recordId)
        )
          draft.records[payload.record.recordId - 1] = payload.record;
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
