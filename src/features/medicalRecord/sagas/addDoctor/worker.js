import helpers from "helpers";
import config from "config";
import Web3 from "web3";
import { abi } from "config/contractAbi.js";
import contractAddress from "config/contractAddress";
import errorsActions from "store/errors/actions";
import loadingActions from "store/loading/actions";
import { put } from "redux-saga/effects";
function* addDoctor({ payload, meta = {} }) {
  const web3 = new Web3(window.ethereum);
  yield put(errorsActions.cleaned());
  const provider = window.ethereum;
  yield provider.request({ method: "eth_requestAccounts" });
  const accounts = yield web3.eth.getAccounts();
  const account = accounts[0];
  const contract = new web3.eth.Contract(abi, contractAddress.address);
  yield put(loadingActions.updated({ value: true }));
  const result = yield contract.methods
    .addAuthorisedDoctor(payload)
    .send({ from: account });
  const event = result.events.authorisedDoctorevent.returnValues;
  if (event.isAdded) {
    yield put(
      errorsActions.updated({
        isSuccess: true,
        message: event.msg,
        show: true,
      })
    );
  }
  yield put(loadingActions.updated({ value: false }));
}

export default addDoctor;
