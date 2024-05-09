import errorsActions from "store/errors/actions";
import { put, select, call } from "redux-saga/effects";
import loadingActions from "store/loading/actions";
import selectors from "features/prescription/selectors";
import actions from "features/prescription/actions";
import getContractInfo from "services/getContractInfo";
function* signPrescription({ payload, meta = {} }) {
  const { account, contract } = yield call(getContractInfo, {
    contractName: "prescription",
  });

  yield put(errorsActions.cleaned());
  const prescriptions = yield select(selectors.all);
  const newPrescriptions = Object.values(prescriptions).map((prescription) => {
    if (prescription.id == payload) {
      return { ...prescription, signedByPatient: true };
    }
    return prescription;
  });

  yield put(errorsActions.cleaned());
  yield put(loadingActions.updated({ value: true }));
  const result = yield contract.methods
    .signByPatient(account, payload)
    .send({ from: account });
  const event = result.events.prescriptionSigned.returnValues;
  if (event.isSignedByPatient) {
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

export default signPrescription;
