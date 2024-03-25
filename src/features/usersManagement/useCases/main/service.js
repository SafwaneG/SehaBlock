import React, { useEffect } from "react";
import { useDispatch, useSelector } from "react-redux";
import actions from "features/usersManagement/actions";
import roleActions from "features/roleManagment/actions";
import serviceActions from "features/serviceManagement/actions";
import gradeActions from "features/gradeManagement/actions";
import selectors from "features/usersManagement/selectors";
function useMain() {
  const dispatch = useDispatch();
  useEffect(() => {
    dispatch(roleActions.get());
    dispatch(serviceActions.get());
    dispatch(gradeActions.get());
    dispatch(actions.get());
  }, []);
  const selectedUser = useSelector((state) =>
    selectors.detailedSelected(state)
  );
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
    dispatch(actions.selectedSet({ id }));
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
  return {
    createOpen,
    handleCreateClose,
    handleEditClick,
    editOpen,
    handleEditClose,
    handleAddNewUserClick,
    selectedUser,
    removeOpen,
    handleRemoveClose,
    handleRemoveClick,
    detailsOpen,
    handleDetailsClose,
    handleDetailsClick,
  };
}

export default useMain;
