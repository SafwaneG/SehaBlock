import * as React from "react";
import Detailed from "../detailed";
import Modale from "../../../../components/modal/index";
import useEditRecord from "./service";

export default function EditUser({ open, handleClose }) {
  const { handleSaveButtonClickedEdit, record } = useEditRecord(handleClose);

  return (
    <Modale
      open={open}
      handleClose={handleClose}
      renderContent={
        <Detailed
          handleClose={handleClose}
          handleSaveButtonClicked={handleSaveButtonClickedEdit}
          record={record}
        />
      }
    />
  );
}
