import { useDispatch, useSelector } from "react-redux";
import actions from "features/usersManagement/actions";
import selectors from "features/usersManagement/selectors";
function useRemoveUser(handleClose) {
  const selectedUser = useSelector((state) => selectors.selected(state));
  const dispatch = useDispatch();
  const handleConfirmRemove = () => {
    dispatch(actions.remove({ id: selectedUser }));
    handleClose();
  };
  const handleCancelRemove = () => {
    handleClose();
  };
  return { handleCancelRemove, handleConfirmRemove };
}

export default useRemoveUser;
