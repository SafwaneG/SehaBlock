import { useDispatch, useSelector } from "react-redux";
import actions from "features/prescription/actions";
import selectors from "features/prescription/selectors";
function useSignPrescription(handleClose) {
  const selectedPrescription = useSelector((state) =>
    selectors.selected(state)
  );

  const dispatch = useDispatch();
  const handleConfirmSign = () => {
    dispatch(actions.signPrescription({ id: selectedPrescription }));
    handleClose();
  };
  const handleCancelRemove = () => {
    handleClose();
  };
  return { handleCancelRemove, handleConfirmSign };
}

export default useSignPrescription;
