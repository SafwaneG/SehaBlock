import { useDispatch } from "react-redux";
import actions from "features/medicalRecord/actions";
import errorActions from "store/errors/actions";
function useCreateUser(handleClose) {
  const dispatch = useDispatch();
  const handleSaveButtonClicked = (newRecord) => {
    // if (
    //   newRecord?.firstName == "" ||
    //   newRecord?.lastName == "" ||
    //   newRecord?.email == "" ||
    //   newRecord?.telephone == "" ||
    //   newRecord?.grade == "" ||
    //   newRecord?.service == "" ||
    //   newRecord?.role == "" ||
    //   newRecord?.serviceRole == ""
    // ) {
    //   dispatch(
    //     errorActions.updated({
    //       isSuccess: false,
    //       message: "Veuillez remplir tous les champs",
    //       show: true,
    //     })
    //   );
    //   return;
    // }
    dispatch(actions.create({ info: { newRecord } }));
    handleClose();
  };
  return { handleSaveButtonClicked };
}

export default useCreateUser;
