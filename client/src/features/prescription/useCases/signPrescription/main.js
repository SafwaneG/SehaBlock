import * as React from "react";
import Modale from "../../../../components/modal/index";
import ConfirmeSign from "./confirmSign";
import useSignPrescription from "./service";
export default function SignPrescription({ open, handleClose }) {
  const { handleCancelRemove, handleConfirmSign } =
    useSignPrescription(handleClose);

  return (
    <Modale
      open={open}
      handleClose={handleClose}
      renderContent={
        <ConfirmeSign
          handleCancelRemove={handleCancelRemove}
          handleConfirmSign={handleConfirmSign}
        />
      }
    />
  );
}
