import * as React from "react";
import Modale from "../../../../components/modal/index";
import ConfirmeRemove from "./confirmRemove";
import useAddDoctor from "./service";
export default function AddDoctor({ open, handleClose }) {
  const { handleCancel, handleAddDoctor, formData, handleChange } =
    useAddDoctor(handleClose);

  return (
    <Modale
      open={open}
      handleClose={handleClose}
      renderContent={
        <ConfirmeRemove
          handleCancel={handleCancel}
          handleAddDoctor={handleAddDoctor}
          formData={formData}
          handleChange={handleChange}
        />
      }
    />
  );
}
