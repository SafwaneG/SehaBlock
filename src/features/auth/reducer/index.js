import types from '../actionsTypes'
import { produce } from 'immer'
import getInitialState from "../initialState"


const authReducer = (state = getInitialState(), action) => {
	const { type, payload } = action

	return produce(state, draft => {
		switch (type) {
			case types.userSet:
				draft.user = payload.user
				break
			case types.tokenSet:
				draft.token = payload.token
				break
			case types.logout:
				draft.token = null
				draft.user = {}
				break
			default:
				break
		}
	})
}

export default authReducer
