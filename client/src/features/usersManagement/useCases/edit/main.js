import * as React from "react";
import Detailed from "../detailed";
import Modale from "../../../../components/modal/index";
import useEditUser from "./service";

export default function EditUser({ open, handleClose, user }) {
  const { handleSaveButtonClickedEdit } = useEditUser(handleClose);

  return (
    <Modale
      open={open}
      handleClose={handleClose}
      renderContent={
        <Detailed
          handleClose={handleClose}
          handleSaveButtonClicked={handleSaveButtonClickedEdit}
          user={user}
        />
      }
    />
  );
}
