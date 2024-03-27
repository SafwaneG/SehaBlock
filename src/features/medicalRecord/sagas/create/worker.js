import helpers from "helpers";
import Web3 from "web3";
import actions from "features/medicalRecord/actions";
import errorsActions from "store/errors/actions";
import { put, select } from "redux-saga/effects";
import { abi } from "config/contractAbi";
import contractAddress from "config/contractAddress";
import selectors from "features/medicalRecord/selectors";
import loadingActions from "store/loading/actions";
function* createWorker({ payload, meta = {} }) {
  const records = yield select(selectors.all);
  const recordsArray = Object.values(records);
  const web3 = new Web3(window.ethereum);
  yield put(errorsActions.cleaned());
  const provider = window.ethereum;
  yield provider.request({ method: "eth_requestAccounts" });
  const accounts = yield web3.eth.getAccounts();
  const account = accounts[0];
  const contract = new web3.eth.Contract(abi, contractAddress.address);
  yield put(loadingActions.updated({ value: true }));
  const result = yield contract.methods
    .addRecord(
      payload.info.newRecord?.firstName,
      payload.info.newRecord?.lastName,
      payload.info.newRecord?.age
    )
    .send({ from: account });
  const event = result.events.recordCreated.returnValues;

  if (event.isCreated) {
    yield put(
      actions.merged({
        records: [
          ...recordsArray,
          {
            recordId: recordsArray.length + 1,
            Fname: payload.info.newRecord?.firstName,
            Lname: payload.info.newRecord?.lastName,
            age: payload.info.newRecord?.age,
            diagnostic: "",
            medicalObservation: "",
            diagnosticResult: "",
            treatement: "",
          },
        ],
      })
    );
    yield put(
      errorsActions.updated({
        isSuccess: true,
        message: event.msg,
        show: true,
      })
    );
  }

  yield put(loadingActions.updated({ value: false }));

  console.log(result);
}
export default createWorker;
