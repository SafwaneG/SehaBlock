import React from "react";
import { Button, Container, Grid } from "@mui/material";
import UserTable from "../list";
import RemoveUser from "../remove";
import Detailed from "../detailed";
import useMain from "./service";

function Main() {
  const {
    handleEditClick,
    removeOpen,
    detailsOpen,
    handleRemoveClose,
    handleRemoveClick,
    handleDetailsClick,
    handleDetailsClose,
    handleMedicalRecordClick,
  } = useMain();

  return (
    <Container
      sx={{
        position: "absolute",
        top: 100,
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      <Grid container flexDirection={"column"}>
        <Grid item>
          <UserTable
            handleEditClick={handleEditClick}
            handleRemoveClick={handleRemoveClick}
            handleDetailsClick={handleDetailsClick}
            handleMedicalRecordClick={handleMedicalRecordClick}
          />
        </Grid>
        <Grid item>
          <RemoveUser open={removeOpen} handleClose={handleRemoveClose} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Main;
