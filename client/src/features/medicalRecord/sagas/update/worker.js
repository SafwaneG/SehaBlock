import errorsActions from "store/errors/actions";
import { put, select, call } from "redux-saga/effects";
import selectors from "features/patients/selectors";
import recordSelectors from "features/medicalRecord/selectors";
import actions from "features/medicalRecord/actions";
import loadingActions from "store/loading/actions";
import getContractInfo from "services/getContractInfo";
function* updateWorker({ payload, meta = {} }) {
  const { account, contract } = yield call(getContractInfo, {
    contractName: "MedicalRecord",
  });

  yield put(errorsActions.cleaned());
  const record = yield select(recordSelectors.detailedSelected);
  const patient = yield select(selectors.detailedSelected);
  yield put(errorsActions.cleaned());
  yield put(loadingActions.updated({ value: true }));
  const result = yield contract.methods
    .updateMedicalInfo(
      patient.doctorAddress,
      payload.changes?.diagnostic,
      payload.changes?.diagnosticResult,

      payload.changes?.medicalObservation,
      payload.changes?.consultationDate,
      payload.changes?.treatment
    )
    .send({ from: account });

  const event = result.events.RecordUpdated.returnValues;

  if (event.isUpdated) {
    const updatedRecord = {
      ...record,
      diagnostic: payload.changes?.diagnostic,
      resulta_diagnostic: payload.changes?.diagnosticResult,
      observation_Medicale: payload.changes?.medicalObservation,
      date_consultation: payload.changes?.consultationDate,
      treatment: payload.changes?.treatment,
    };
    console.log(updatedRecord);

    yield put(actions.updated({ record: updatedRecord }));
    yield put(loadingActions.updated({ value: false }));
    yield put(
      errorsActions.updated({
        isSuccess: true,
        message: event.msg,
        show: true,
      })
    );
  }
}
export default updateWorker;
