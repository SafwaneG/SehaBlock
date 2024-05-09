import * as React from "react";
import Modale from "../../../../components/modal/index";
import ConfirmeRemove from "./confirmRemove";
import useRemoveUser from "./service";
export default function RemoveUser({ open, handleClose }) {
  const { handleCancelRemove, handleConfirmRemove } =
    useRemoveUser(handleClose);

  return (
    <Modale
      open={open}
      handleClose={handleClose}
      renderContent={
        <ConfirmeRemove
          handleCancelRemove={handleCancelRemove}
          handleConfirmRemove={handleConfirmRemove}
        />
      }
    />
  );
}
