import { put, call } from 'redux-saga/effects'

import helpers from 'helpers'
import config from 'config'
import actions from '../../actions'

export default function* logoutWorker() {
	let tokenParams = { key: config.localStorage.tokenPersistKey }
	let userParams = { key: config.localStorage.userPersistKey }

	yield call(helpers.persister.remove, tokenParams)
	yield call(helpers.persister.remove, userParams)

	// yield put(actions.logout())
}
