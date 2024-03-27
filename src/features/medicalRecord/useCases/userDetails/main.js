import * as React from "react";
import Modale from "../../../../components/modal/index";
import Details from "./details";
import useDetailsUser from "./service";
export default function DetailsUser({ open, handleClose }) {
  const { selectedRecord } = useDetailsUser();

  return (
    <Modale
      open={open}
      handleClose={handleClose}
      renderContent={<Details selectedRecord={selectedRecord} />}
    />
  );
}
