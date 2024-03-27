import { Grid, Container, Button, Typography, TextField } from "@mui/material";
import useRemoveRole from "./service";

function ConfirmeRemove(props) {
  return (
    <Container>
      <Grid container justifyContent={"center"} spacing={2}>
        <Grid item xs={12} sm={12}>
          <Typography variant="h3" sx={{ textAlign: "center" }}>
            Authorise a doctor to access your medical record
          </Typography>
        </Grid>
        <Grid item xs={12} sm={12}>
          <TextField
            required
            fullWidth
            name="doctorAddress"
            label=" Address de docteur "
            id="doctorAddress"
            variant="outlined"
            value={props.formData.doctorAddress}
            onChange={props.handleChange}
            // error={treatmentFilledError}
            // helperText={treatmentFilledError && "Treatment  is required"}
          />
        </Grid>
        <Grid item xs={12} sm={2} sx={{ mr: 1 }}>
          <Button variant="contained" onClick={props.handleAddDoctor}>
            Add Doctor
          </Button>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Button
            variant="contained"
            color="error"
            onClick={props.handleCancel}
          >
            Annuler
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ConfirmeRemove;
