import { useDispatch, useSelector } from "react-redux";
import actions from "features/medicalRecord/actions";
import errorActions from "store/errors/actions";
import selectors from "features/medicalRecord/selectors";
function useEditRecord(handleClose) {
  const dispatch = useDispatch();
  const record = useSelector((state) => selectors.detailedSelected(state));

  const handleSaveButtonClickedEdit = (record) => {
    dispatch(actions.update({ changes: record }));
    handleClose();
  };
  return { handleSaveButtonClickedEdit, record };
}

export default useEditRecord;
