import Web3 from "web3";
import actions from "features/prescription/actions";
import errorsActions from "store/errors/actions";
import { put, select } from "redux-saga/effects";
import { abi } from "config/contractAbi";
import contractAddress from "config/contractAddress";
import selectors from "features/prescription/selectors";
import loadingActions from "store/loading/actions";
function* createWorker({ payload, meta = {} }) {
  const prescriptions = yield select(selectors.all);
  console.log(prescriptions, "prescriptions");
  const web3 = new Web3(window.ethereum);
  yield put(errorsActions.cleaned());
  const provider = window.ethereum;
  yield provider.request({ method: "eth_requestAccounts" });
  const accounts = yield web3.eth.getAccounts();
  const account = accounts[0];
  const contract = new web3.eth.Contract(abi, contractAddress.address);
  const medications = payload.info.newPrescription.medications.map(
    (medication) => {
      return [
        0,
        medication.medicationName,
        medication.quantity,
        medication.dosage,
        medication.signedByPharmacie,
      ];
    }
  );
  yield put(loadingActions.updated({ value: true }));
  const patientDetails = yield contract.methods
    .getUserInfo(payload.info.newPrescription.patientAddress)
    .call({ from: account });
  const doctorDetails = yield contract.methods
    .getUserInfo(account)
    .call({ from: account });

  const result = yield contract.methods
    .createPrescription(
      payload.info.newPrescription.patientAddress,
      medications
    )
    .send({ from: account });

  console.log(doctorDetails, "doctorDetails");
  const event = result.events.PrescriptionCreated.returnValues;

  if (event.isCreated) {
    yield put(
      actions.merged({
        prescriptions: [
          ...Object.values(prescriptions),
          {
            id: Object.values(prescriptions).length,
            medications: payload.info.newPrescription.medications,
            patientName: patientDetails[1],
            doctorName: doctorDetails[1],
            signedByDoctor: true,
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
  console.log(result, "result");
}
export default createWorker;
