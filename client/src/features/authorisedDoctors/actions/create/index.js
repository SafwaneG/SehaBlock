import types from '../../actionsTypes'

export default function create({ meta = {}, ...info } = {}) {
	return {
		type: types.create,
		payload: { ...info },
		meta: { id: types.create, ...meta },
	}
}
