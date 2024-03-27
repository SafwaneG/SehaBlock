import { useDispatch, useSelector } from "react-redux";
import { useState } from "react";
import actions from "features/medicalRecord/actions";
// import selectors from "features/usersManagement/selectors";
function useAddDoctor(handleClose) {
  const [formData, setFormData] = useState({
    doctorAddress: "",
  });
  const { doctorAddress } = formData;
  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };
  const dispatch = useDispatch();
  const handleAddDoctor = () => {
    dispatch(actions.addDoctor({ doctorAddress }));
    handleClose();
  };
  const handleCancel = () => {
    handleClose();
  };
  return { handleCancel, handleAddDoctor, formData, handleChange };
}

export default useAddDoctor;
