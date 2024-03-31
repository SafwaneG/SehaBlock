import { useDispatch, useSelector } from "react-redux";
import actions from "features/pharmacy/actions";
import selectors from "features/prescription/selectors";
import pharmacySelectors from "features/pharmacy/selectors";
function useSignPrescription(handleClose) {
  const selectedPrescription = useSelector((state) =>
    selectors.selected(state)
  );
  const selectedMedication = useSelector((state) =>
    pharmacySelectors.selected(state)
  );

  const dispatch = useDispatch();
  const handleConfirmSign = () => {
    dispatch(
      actions.signMedication({
        idPrescription: selectedPrescription,
        idMedication: selectedMedication,
      })
    );
    handleClose();
  };
  const handleCancelRemove = () => {
    handleClose();
  };
  return { handleCancelRemove, handleConfirmSign };
}

export default useSignPrescription;
