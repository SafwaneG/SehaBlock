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

      // case types.updated:
      //   if (
      //     helpers.validator.isObject(payload?.user) &&
      //     !helpers.validator.isEmptyObject(payload?.user) &&
      //     !helpers.validator.isEmptyString(payload?.user?.id)
      //   )
      //     draft.users[payload.user.id] = payload.user;
      //   break;

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
