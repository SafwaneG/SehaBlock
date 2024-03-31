import errorsActions from "store/errors/actions";
import { put, select } from "redux-saga/effects";
import Web3 from "web3";
import contractAddress from "config/contractAddress";
import { abi } from "config/contractAbi";
import loadingActions from "store/loading/actions";
import selectors from "features/prescription/selectors";
import actions from "features/prescription/actions";
function* signMedication({ payload, meta = {} }) {
  yield put(errorsActions.cleaned());
  const prescriptions = yield select(selectors.all);
  const selectedPrescription = yield select(selectors.detailedSelected);
  console.log("pp", payload);
  const newPrescriptions = Object.values(prescriptions).map((prescription) => {
    if (prescription.id == payload.idPrescription) {
      console.log("pres");
      const medications = prescription.medications.map((medication) => {
        if (medication.medicationId == payload.idMedication) {
          console.log("med");
          return { ...medication, signedbyPharmacie: true };
        }
        return medication;
      });

      return { ...prescription, medications };
    }
    return prescription;
  });

  const web3 = new Web3(window.ethereum);
  yield put(errorsActions.cleaned());
  const provider = window.ethereum;
  yield provider.request({ method: "eth_requestAccounts" });
  const accounts = yield web3.eth.getAccounts();
  const account = accounts[0];
  const contract = new web3.eth.Contract(abi, contractAddress.address);
  yield put(loadingActions.updated({ value: true }));
  const result = yield contract.methods
    .signedByPharmacy(
      selectedPrescription?.patient,
      payload.idPrescription,
      payload.idMedication
    )
    .send({ from: account });
  const event = result.events.prescriptionSigned.returnValues;
  console.log(event, "event");
  if (event.isSignedByPhramacy) {
    yield put(actions.merged({ prescriptions: [...newPrescriptions] }));
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

export default signMedication;
