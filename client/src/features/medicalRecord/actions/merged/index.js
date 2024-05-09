import types from '../../actionsTypes'

export default function merged({ records }) {
  return { type: types.merged, payload: { records } };
}
