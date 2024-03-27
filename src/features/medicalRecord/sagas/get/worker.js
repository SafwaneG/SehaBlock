import { put } from "redux-saga/effects";
import Web3 from "web3";
import helpers from "helpers";
import contractAddress from "config/contractAddress";
import { abi } from "config/contractAbi";
import actions from "features/medicalRecord/actions";
import errorsActions from "store/errors/actions";
function* getWorker({ meta = {} }) {
  const web3 = new Web3(window.ethereum);
  yield put(errorsActions.cleaned());
  const provider = window.ethereum;
  yield provider.request({ method: "eth_requestAccounts" });
  const accounts = yield web3.eth.getAccounts();
  const account = accounts[0];
  const contract = new web3.eth.Contract(abi, contractAddress.address);
  const result = yield contract.methods.getAllRecord().call({ from: account });
  const medicalRecordJSON = result.map((record) =>
    JSON.stringify(record, (key, value) => {
      if (typeof value === "bigint") {
        return value.toString();
      }
      return value;
    })
  );
  const medicalRecord = medicalRecordJSON.map((record) => JSON.parse(record));
  yield put(actions.merged({ records: [...medicalRecord] }));

  // yield put(actions.merged({ users: { ...users } }));
  // } else {
  //   yield put(
  //     errorsActions.updated({
  //       show: true,
  //       message: data?.errorMessage,
  //       isSuccess: false,
  //     })
  //   );
  // }
}
export default getWorker;
