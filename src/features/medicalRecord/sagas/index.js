import { all } from "redux-saga/effects";
import getRoles from "./get";
import updateRole from "./update";
import removeRole from "./remove";
import createRole from "./create";
export default function* saga() {
  yield all([getRoles(), updateRole(), removeRole(), createRole()]);
}
