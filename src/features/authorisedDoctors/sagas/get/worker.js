import { put } from "redux-saga/effects";
import Web3 from "web3";
import contractAddress from "config/contractAddress";
import { abi } from "config/contractAbi";
import actions from "features/authorisedDoctors/actions";
import errorsActions from "store/errors/actions";
function* getWorker({ meta = {} }) {
  const web3 = new Web3(window.ethereum);
  yield put(errorsActions.cleaned());
  const provider = window.ethereum;
  yield provider.request({ method: "eth_requestAccounts" });
  const accounts = yield web3.eth.getAccounts();
  const account = accounts[0];
  const contract = new web3.eth.Contract(abi, contractAddress.address);
  const result = yield contract.methods
    .getDoctorAuthorisedInfo()
    .call({ from: account });

  console.log(result, "result");
  yield put(actions.merged({ authorisedDoctors: [...result] }));
}
export default getWorker;
