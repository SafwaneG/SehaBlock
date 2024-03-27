import Web3 from "web3";
import { abi } from "config/contractAbi.js";
import contractAddress from "config/contractAddress";
import errorsActions from "store/errors/actions";
import { put, select } from "redux-saga/effects";
import selectors from "features/authorisedDoctors/selectors";
import loadingActions from "store/loading/actions";
import actions from "features/authorisedDoctors/actions";

function* removeWorker({ payload, meta = {} }) {
  const web3 = new Web3(window.ethereum);
  yield put(errorsActions.cleaned());
  const provider = window.ethereum;
  yield provider.request({ method: "eth_requestAccounts" });
  const accounts = yield web3.eth.getAccounts();
  const account = accounts[0];
  const contract = new web3.eth.Contract(abi, contractAddress.address);
  yield put(loadingActions.updated({ value: true }));
  const doctor = yield select(selectors.detailedSelected);
  const result = yield contract.methods
    .removeDoctor(doctor.doctorAddress)
    .send({ from: account });
  console.log(result, "result22");
  const event = result.events.removedDoctor.returnValues;
  yield put(loadingActions.updated({ value: false }));

  if (event.isRemoved) {
    yield put(actions.removed({ id: payload }));
    yield put(
      errorsActions.updated({
        isSuccess: true,
        message: event.msg,
        show: true,
      })
    );
  } else {
    yield put(
      errorsActions.updated({
        isSuccess: false,
        message: event.msg,
        show: true,
      })
    );
  }
}

export default removeWorker;
