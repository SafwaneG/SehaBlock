import { useDispatch, useSelector } from "react-redux";
import actions from "features/authorisedDoctors/actions";
import selectors from "features/authorisedDoctors/selectors";
function useRemoveUser(handleClose) {
  const selectedDoctor = useSelector((state) => selectors.selected(state));
  const dispatch = useDispatch();
  const handleConfirmRemove = () => {
    dispatch(actions.remove({ id: selectedDoctor }));
    handleClose();
  };
  const handleCancelRemove = () => {
    handleClose();
  };
  return { handleCancelRemove, handleConfirmRemove };
}

export default useRemoveUser;
