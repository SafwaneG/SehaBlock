import * as React from "react";
import Modale from "../../../../components/modal/index";
import Details from "./details";
import useDetailsUser from "./service";
export default function DetailsPrescreption({
  open,
  handleClose,
  handleSignByPharmacy,
}) {
  const { selectedPrescreption } = useDetailsUser();

  return (
    <Modale
      open={open}
      handleClose={handleClose}
      renderContent={
        <Details
          selectedPrescreption={selectedPrescreption}
          handleSignByPharmacy={handleSignByPharmacy}
        />
      }
    />
  );
}
