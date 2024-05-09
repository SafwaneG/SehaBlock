const AUTH = "auth ::: ";

export default Object.freeze({
  // for saga
  login: `${AUTH}login`,
  logout: `${AUTH}logout`,
  resetPassword: `${AUTH}resetPassword`,
  setup: `${AUTH}setup`,

  // for reducer
  tokenSet: `${AUTH}token/set`,
  userSet: `${AUTH}user/set`,
});
