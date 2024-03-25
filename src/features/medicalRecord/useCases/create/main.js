import * as React from "react";
import Detailed from "../detailed";
import Modale from "../../../../components/modal/index";
import useCreateUser from "./service";

export default function CreateUser({ open, handleClose }) {
  const { handleSaveButtonClicked } = useCreateUser(handleClose);

  return (
    <Modale
      open={open}
      handleClose={handleClose}
      renderContent={
        <Detailed
          handleSaveButtonClicked={handleSaveButtonClicked}
          handleClose={handleClose}
        />
      }
    />
  );
}
