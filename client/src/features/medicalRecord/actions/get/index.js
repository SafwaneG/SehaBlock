import types from '../../actionsTypes'

export default function get({ meta = {} } = {}) {
  return {
    type: types.get,
    meta: { id: types.get, ...meta },
  };
}
