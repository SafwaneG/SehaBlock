import React from "react";
import {
  Grid,
  TextField,
  FormControl,
  InputLabel,
  Select,
  MenuItem,
  Container,
  FormHelperText,
  Button,
  Typography,
  Box,
} from "@mui/material";
import AddCircleOutlineOutlinedIcon from "@mui/icons-material/AddCircleOutlineOutlined";
import CancelOutlinedIcon from "@mui/icons-material/CancelOutlined";
import useDetailed from "./service";
function Detailed({ handleSaveButtonClicked, handleClose, prescription }) {
  const {
    formData,
    handleChange,
    handleBlur,
    patientAddressFilledError,
    newPrescription,
    updateMedication,
    handleAddMedication,
    handleRemoveMedication,
    patient,
  } = useDetailed(prescription);

  return (
    <Container>
      <Grid container justifyContent={"center"} sx={{ mt: 1 }} spacing={2}>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            disabled
            fullWidth
            name="patientAddress"
            label="Patient's Address"
            id="patientAddress"
            variant="outlined"
            value={patient.doctorAddress}
            onChange={handleChange}
            onBlur={handleBlur}
            error={patientAddressFilledError}
            helperText={
              patientAddressFilledError && "Patient's Address is required"
            }
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            disabled
            required
            fullWidth
            name="signedByDoctor"
            label="Signed By doctor"
            id="signedByDoctor"
            variant="outlined"
            value={
              prescription.signedByDoctor != null
                ? prescription.signedByDoctor
                : formData.signedByDoctor
            }
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            disabled
            required
            fullWidth
            name="signedByPatient"
            label="Signed By Patient"
            id="signedByPatient"
            variant="outlined"
            value={
              prescription.signedByPatient != null
                ? prescription.signedByPatient
                : formData.signedByPatient
            }
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Grid>

        {formData.medications?.map((item, index) => (
          <React.Fragment key={index}>
            <Grid item xs={12} sm={4}>
              <TextField
                required
                fullWidth
                name="medicationName"
                label="Medication Name"
                id="medicationName"
                variant="outlined"
                onChange={updateMedication(index)}
                value={formData?.medications[index]?.medicationName}
              />
            </Grid>

            <Grid item xs={12} sm={2}>
              <TextField
                required
                fullWidth
                name="quantity"
                label="Quantité"
                id="quantité"
                variant="outlined"
                onChange={updateMedication(index)}
                value={formData?.medications[index]?.quantity}
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <TextField
                required
                fullWidth
                name="dosage"
                label="Dosage"
                id="dosage"
                variant="outlined"
                onChange={updateMedication(index)}
                value={formData?.medications[index]?.dosage}
              />
            </Grid>
            <Grid item xs={12} sm={2}>
              <TextField
                disabled
                required
                fullWidth
                name="signedByPharmacie"
                label="Signed By Pharmacie"
                id="signedByPharmacie"
                variant="outlined"
                onChange={updateMedication(index)}
                value={formData?.medications[index]?.signedByPharmacie}
              />
            </Grid>
            <Grid item xs={2} sm={1}>
              <Box
                component={"button"}
                sx={
                  {
                    backgroundColor: "transparent",
                    border: "none",
                  }
                  // : {
                  //     backgroundColor: "transparent",
                  //     border: "none",
                  //     opacity: 0.5,
                  //   }
                }
                onClick={handleAddMedication}
                // disabled={
                //   requestStep !== 5 ||
                //   !["admin", "technician"].includes(role) ||
                //   requestData?.order > 5
                // }
              >
                <AddCircleOutlineOutlinedIcon
                  sx={{
                    fontSize: 38,
                    color: "#2196f3",
                    cursor: "pointer",
                  }}
                />
              </Box>
            </Grid>
            <Grid item xs={2} sm={1}>
              <Box
                // sx={
                //   requestStep === 5
                //     ? {
                //         backgroundColor: "transparent",
                //         border: "none",
                //       }
                //     : {
                //         backgroundColor: "transparent",
                //         border: "none",
                //         opacity: 0.5,
                //       }
                // }
                onClick={() => handleRemoveMedication(index)}
                // disabled={
                //   requestStep !== 5 ||
                //   !["admin", "technician"].includes(role) ||
                //   requestData?.order > 5
                // }
              >
                <CancelOutlinedIcon
                  sx={{
                    fontSize: 38,
                    color: "#2196f3",
                    cursor: "pointer",
                  }}
                />
              </Box>
            </Grid>
          </React.Fragment>
        ))}
        <Grid item xs={12} sm={4}>
          <Grid item>
            <Button
              sx={{ mr: 2 }}
              variant="contained"
              onClick={() => handleSaveButtonClicked(newPrescription)}
            >
              Enregistrer
            </Button>
            <Button variant="contained" color="error" onClick={handleClose}>
              Annuler
            </Button>
          </Grid>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Detailed;
