// import errorsActions from "store/errors/actions";
// import Web3 from "web3";
// import { abi } from "config/contractAbi";
// import contractAddress from "config/contractAddress";
// import { put, select } from "redux-saga/effects";
// import selectors from "features/patients/selectors";
// import recordSelectors from "features/medicalRecord/selectors";
// import actions from "features/medicalRecord/actions";
// import loadingActions from "store/loading/actions";
// function* updateWorker({ payload, meta = {} }) {
//   yield put(errorsActions.cleaned());
//   const record = yield select(recordSelectors.detailedSelected);
//   const patient = yield select(selectors.detailedSelected);
//   const web3 = new Web3(window.ethereum);
//   yield put(errorsActions.cleaned());
//   const provider = window.ethereum;
//   yield provider.request({ method: "eth_requestAccounts" });
//   const accounts = yield web3.eth.getAccounts();
//   const account = accounts[0];
//   const contract = new web3.eth.Contract(abi, contractAddress.address);
//   yield put(loadingActions.updated({ value: true }));
//   const result = yield contract.methods
//     .updateMedicalInfo(
//       patient.doctorAddress,
//       payload.changes?.diagnostic,
//       payload.changes?.diagnosticResult,

//       payload.changes?.medicalObservation,
//       payload.changes?.consultationDate,
//       payload.changes?.treatment
//     )
//     .send({ from: account });

//   const event = result.events.RecordUpdated.returnValues;

//   if (event.isUpdated) {
//     const updatedRecord = {
//       ...record,
//       diagnostic: payload.changes?.diagnostic,
//       resulta_diagnostic: payload.changes?.diagnosticResult,
//       observation_Medicale: payload.changes?.medicalObservation,
//       date_consultation: payload.changes?.consultationDate,
//       treatment: payload.changes?.treatment,
//     };

//     yield put(actions.updated({ record: updatedRecord }));
//     yield put(loadingActions.updated({ value: false }));
//     yield put(
//       errorsActions.updated({
//         isSuccess: true,
//         message: event.msg,
//         show: true,
//       })
//     );
//   }
// }
// export default updateWorker;
