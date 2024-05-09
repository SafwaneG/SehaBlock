import { useDispatch } from "react-redux";
import actions from "features/prescription/actions";
import errorActions from "store/errors/actions";
function useCreateUser(handleClose) {
  const dispatch = useDispatch();
  const handleSaveButtonClicked = (newPrescription) => {
    dispatch(actions.create({ info: { newPrescription } }));
    handleClose();
  };
  return { handleSaveButtonClicked };
}

export default useCreateUser;
