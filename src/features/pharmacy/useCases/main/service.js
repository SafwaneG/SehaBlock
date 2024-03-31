import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "features/prescription/actions";
import authSelectors from "features/auth/selectors";
import selectors from "features/prescription/selectors";
import pharmacyActions from "features/pharmacy/actions";
function useMain() {
  const dispatch = useDispatch();
  const prescriptions = useSelector((state) => selectors.all(state));
  console.log(prescriptions, "prescriptions");
  const user = useSelector((state) => authSelectors.user(state));

  const [formData, setFormData] = React.useState({
    patientAddress: "",
  });
  const [createOpen, setCreateOpen] = React.useState(false);
  const [editOpen, setEditOpen] = React.useState(false);
  const [removeOpen, setRemoveOpen] = React.useState(false);
  const [detailsOpen, setDetailsOpen] = React.useState(false);
  const handleCreateOpen = () => setCreateOpen(true);
  const handleCreateClose = () => {
    setCreateOpen(false);
  };
  const handleAddNewUserClick = () => {
    handleCreateOpen();
  };

  const handleEditOpen = () => setEditOpen(true);
  const handleEditClose = () => {
    setEditOpen(false);
  };
  const handleEditClick = (id) => {
    // dispatch(actions.selectedSet({ id }));
    handleEditOpen();
  };
  const handleRemoveOpen = () => setRemoveOpen(true);
  const handleRemoveClose = () => setRemoveOpen(false);
  const handleRemoveClick = (id) => {
    // dispatch(actions.selectedSet({ id }));
    handleRemoveOpen();
  };

  const handleDetailsOpen = () => setDetailsOpen(true);
  const handleDetailsClose = () => setDetailsOpen(false);
  const handleDetailsClick = (prescription) => {
    console.log(prescription, "prescription");
    dispatch(actions.selectedSet({ id: prescription.id }));
    handleDetailsOpen();
  };

  const handleSignPrescriptionClick = (id) => {
    dispatch(actions.selectedSet({ id }));
    handleRemoveOpen();
  };

  const handleCreatePrescription = () => {
    handleCreateOpen();
  };

  const handleChange = (e) => {
    setFormData((prevData) => ({
      ...prevData,
      [e.target.name]: e.target.value,
    }));
  };

  const handleGetPrescriptions = () => {
    dispatch(actions.get({ address: formData.patientAddress }));
  };

  const handleSignByPharmacy = (medication) => {
    dispatch(pharmacyActions.selectedSet({ id: medication.medicationId }));
    handleRemoveOpen();
  };

  return {
    createOpen,
    handleCreateClose,
    handleEditClick,
    editOpen,
    handleEditClose,
    handleAddNewUserClick,
    // selectedUser,
    removeOpen,
    handleRemoveClose,
    handleRemoveClick,
    detailsOpen,
    handleDetailsClose,
    handleDetailsClick,
    user,
    handleCreatePrescription,
    handleSignPrescriptionClick,
    handleChange,
    formData,
    handleGetPrescriptions,
    prescriptions,
    handleSignByPharmacy,
  };
}

export default useMain;
