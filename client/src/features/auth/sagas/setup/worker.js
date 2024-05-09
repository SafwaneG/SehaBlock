import { put, call } from 'redux-saga/effects'

import loading from 'store/loading'
import authActions from '../../actions'
import { batchActions } from 'redux-batched-actions'
import helpers from 'helpers'
import config from 'config'

export default function* setupWorker({ meta = {} }) {
	const tokenParams = { key: config.localStorage.tokenPersistKey }
	const userParams = { key: config.localStorage.userPersistKey }
	let actions = []

	// start loading
	yield put(loading.actions.updated({ value: true, id: meta.id }))

	// get token from AsyncStorage
	let token = yield call(helpers.persister.get, tokenParams)
	// get user from asyncStorage
	let user = yield call(helpers.persister.get, userParams)

	// set token to redux store
	if (
		token.success &&
		token.value !== null &&
		user.success &&
		user.value !== null
	) {
		actions.push(authActions.tokenSet({ token: token.value }))
		actions.push(authActions.userSet({ user: JSON.parse(user.value) }))
	}

	yield put(batchActions(actions))

	// end loading
	yield put(loading.actions.updated({ value: false, id: meta.id }))
}
