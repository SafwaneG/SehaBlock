import testState from "./state";
import helpers from "helpers";
import config from "config";

const prodState = {
  token:
    helpers.persister.get({ key: config.localStorage?.tokenPersistKey })
      ?.value || "",
  user:
    JSON.parse(
      helpers.persister.get({ key: config.localStorage?.userPersistKey })?.value
    ) || {},
};

export default function getInitialState() {
  return process.env.NODE_ENV === "production" ? prodState : testState;
}
