import helpers from "helpers";
import config from "config";
const initialTestState = {
  user: JSON.parse(helpers.persister.get({ key: "user" })?.value),
};
export default initialTestState;
