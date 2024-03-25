import { put } from 'redux-saga/effects'
import errors from 'store/errors'
import features from 'features'
import config from 'config'
import prepareProdErrors from '../prepareProdErrors'

export default function* onResponseError({ error, errorCode, id }) {
	let result = { isSuccess: false, id }

	if (errorCode) {
		if (errorCode === 'I0001') // I0001: unauthorized
			yield put(features.auth.actions.logout())
		else {
			result['message'] = config.errors[errorCode]
			result['show'] = true
		}
	} else {
		let parsedErrorCode = prepareProdErrors(error)

		if (parsedErrorCode) {
			result['message'] = config.errors[parsedErrorCode]
			result['show'] = true
		}
	}

	yield put(errors.actions.updated({ ...result }))
}
