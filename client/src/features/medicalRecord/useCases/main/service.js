import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "features/medicalRecord/actions";
import authSelectors from "features/auth/selectors";
import selectors from "features/medicalRecord/selectors";
function useMain() {
  const dispatch = useDispatch();

  useEffect(() => {
    dispatch(actions.get());
  }, []);
  const records = useSelector((state) => selectors.all(state));
  const user = useSelector((state) => authSelectors.user(state));

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
    // dispatch(actions.selectedSet({ id }));
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

  const handleUpdateRecord = () => {
    const recordsKeys = Object.keys(records);
    dispatch(actions.selectedSet({ id: recordsKeys[recordsKeys.length - 1] }));
    handleEditClick();
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
    records,
    addDoctorOpen,
    handleAddDoctorClose,
    handleAddDoctorOpen,
    user,
    handleUpdateRecord,
  };
}

export default useMain;
