import types from '../../actionsTypes'

export default function merged({ prescriptions }) {
  return { type: types.merged, payload: { prescriptions } };
}
