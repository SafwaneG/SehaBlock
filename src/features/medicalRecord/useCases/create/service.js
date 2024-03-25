import { useDispatch } from "react-redux";
import actions from "features/usersManagement/actions";
import errorActions from "store/errors/actions";
function useCreateUser(handleClose) {
  const dispatch = useDispatch();
  const handleSaveButtonClicked = (newUser, validation) => {
    if (
      newUser?.firstName == "" ||
      newUser?.lastName == "" ||
      newUser?.email == "" ||
      newUser?.telephone == "" ||
      newUser?.grade == "" ||
      newUser?.service == "" ||
      newUser?.role == "" ||
      newUser?.serviceRole == ""
    ) {
      dispatch(
        errorActions.updated({
          isSuccess: false,
          message: "Veuillez remplir tous les champs",
          show: true,
        })
      );
      return;
    }
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
    if (validation?.isEmailAlreadyUsed) {
      dispatch(
        errorActions.updated({
          isSuccess: false,
          message: " Email déjà utilisé",
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

    dispatch(actions.create({ info: { newUser } }));
    handleClose();
  };
  return { handleSaveButtonClicked };
}

export default useCreateUser;
