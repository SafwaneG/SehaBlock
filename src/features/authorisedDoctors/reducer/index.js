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
          helpers.validator.isArray(payload.authorisedDoctors) &&
          payload.authorisedDoctors.length > 0
        )
          payload.authorisedDoctors.forEach((authorisedDoctor, i) => {
            draft.authorisedDoctors[i] = authorisedDoctor;
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
      case types.removed:
        delete draft.authorisedDoctors[payload?.id];
      default:
        break;
    }
  });
};

export default reducer;
