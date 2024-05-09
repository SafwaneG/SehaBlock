import { useDispatch } from "react-redux";
import actions from "features/usersManagement/actions";
import errorActions from "store/errors/actions";
function useEditUser(handleClose) {
  const dispatch = useDispatch();
  const handleSaveButtonClickedEdit = (user, validation) => {
    if (!validation?.isValidEmail) {
      dispatch(
        errorActions.updated({
          isSuccess: false,
          message: " Email invalide",
          show: true,
        })
      );
      return;
    }
    if (!validation?.isValidPhone) {
      dispatch(
        errorActions.updated({
          isSuccess: false,
          message: " Numéro de téléphone invalide",
          show: true,
        })
      );
      return;
    }
    dispatch(actions.update({ changes: user }));
    handleClose();
  };
  return { handleSaveButtonClickedEdit };
}

export default useEditUser;
