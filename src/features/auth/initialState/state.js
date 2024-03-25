import helpers from "helpers";
import config from "config";
const initialTestState = {
  // user: {
  //   displayName: "Safouane",
  //   email: "email@gmail.com",
  //   photoURL: "/assets/images/avatars/avatar_default.jpg",
  //   role: "admin",
  //   permissions: [],
  //   service: "service--1",
  // },
  user: JSON.parse(
    helpers.persister.get({ key: config.localStorage?.userPersistKey })?.value
  ),
  token: helpers.persister.get({ key: config.localStorage?.tokenPersistKey })
    ?.value,
};
export default initialTestState;
