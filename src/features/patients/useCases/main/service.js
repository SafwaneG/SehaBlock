import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import { useNavigate } from "react-router-dom";
import actions from "features/patients/actions";

import selectors from "features/patients/selectors";
function useMain() {
  const dispatch = useDispatch();
  const navigate = useNavigate();

  useEffect(() => {
    dispatch(actions.get());
  }, []);
  const patients = useSelector((state) => selectors.all(state));
  console.log(patients, "dd");

  const [createOpen, setCreateOpen] = React.useState(false);
  const [editOpen, setEditOpen] = React.useState(false);
  const [removeOpen, setRemoveOpen] = React.useState(false);
  const [detailsOpen, setDetailsOpen] = React.useState(false);
  const [addDoctorOpen, setAddDoctorOpen] = React.useState(false);
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
    dispatch(actions.selectedSet({ id }));
    handleRemoveOpen();
  };

  const handleDetailsOpen = () => setDetailsOpen(true);
  const handleDetailsClose = () => setDetailsOpen(false);
  const handleDetailsClick = (id) => {
    dispatch(actions.selectedSet({ id }));
    handleDetailsOpen();
  };

  const handleAddDoctorOpen = () => setAddDoctorOpen(true);
  const handleAddDoctorClose = () => setAddDoctorOpen(false);

  const handleMedicalRecordClick = (id) => {
    navigate("/dashboard/medicalRecord");
    dispatch(actions.selectedSet({ id }));
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
    patients,
    addDoctorOpen,
    handleAddDoctorClose,
    handleAddDoctorOpen,
    handleMedicalRecordClick,
  };
}

export default useMain;
