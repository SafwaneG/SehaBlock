import React from "react";
import { Button, Container, Grid, TextField } from "@mui/material";
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
    handleChange,
    formData,
    handleGetPrescriptions,
    prescriptions,
    handleSignByPharmacy,
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
      <Grid>
        {Object.values(prescriptions).length <= 0 && (
          <Grid container gap={2} alignItems={"center"}>
            <Grid item xs={12} sm={8}>
              <TextField
                required
                fullWidth
                name="patientAddress"
                label="Patient's Address"
                id="patientAddress"
                variant="outlined"
                value={formData.patientAddress}
                onChange={handleChange}
              />
            </Grid>
            <Grid item xs={12} sm={3}>
              <Button
                variant="contained"
                color="primary"
                onClick={handleGetPrescriptions}
              >
                Get Prescriptions
              </Button>
            </Grid>
          </Grid>
        )}

        {Object.values(prescriptions).length > 0 && (
          <Grid item>
            <UserTable
              handleEditClick={handleEditClick}
              handleRemoveClick={handleRemoveClick}
              handleDetailsClick={handleDetailsClick}
              handleSignPrescriptionClick={handleSignPrescriptionClick}
            />
          </Grid>
        )}

        {Object.values(prescriptions).length > 0 && (
          <Grid item>
            <DetailsPrescreption
              open={detailsOpen}
              handleClose={handleDetailsClose}
              handleSignByPharmacy={handleSignByPharmacy}
            />
          </Grid>
        )}
        {Object.values(prescriptions).length > 0 && (
          <Grid item>
            <RemoveUser open={removeOpen} handleClose={handleRemoveClose} />
          </Grid>
        )}
      </Grid>
    </Container>
  );
}

export default Main;
