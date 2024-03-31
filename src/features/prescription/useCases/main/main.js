import React from "react";
import { Button, Container, Grid } from "@mui/material";
import UserTable from "../list";
import CreateUser from "../create";
import EditUser from "../edit";
import RemoveUser from "../signPrescription";
import DetailsPrescreption from "../prescriptionDetails";
import useMain from "./service";

function Main() {
  const {
    createOpen,
    handleCreateClose,
    editOpen,
    handleEditClose,
    handleEditClick,
    handleRemoveClick,
    handleRemoveClose,
    removeOpen,
    detailsOpen,
    handleDetailsClose,
    handleDetailsClick,
    user,
    handleCreatePrescription,
    handleSignPrescriptionClick,
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
            handleSignPrescriptionClick={handleSignPrescriptionClick}
          />
        </Grid>
        {user?.userNature === "doctor" && (
          <Grid
            item
            sx={{ position: "absolute", bottom: "-3rem", right: "4.8rem" }}
          >
            <Button variant="contained" onClick={handleCreatePrescription}>
              Create Prescription
            </Button>
          </Grid>
        )}
        <Grid item>
          <CreateUser open={createOpen} handleClose={handleCreateClose} />
        </Grid>
        <Grid item>
          <DetailsPrescreption
            open={detailsOpen}
            handleClose={handleDetailsClose}
          />
        </Grid>
        <Grid item>
          <EditUser open={editOpen} handleClose={handleEditClose} />
        </Grid>
        <Grid item>
          <RemoveUser open={removeOpen} handleClose={handleRemoveClose} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Main;
