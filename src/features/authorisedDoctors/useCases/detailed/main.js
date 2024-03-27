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
} from "@mui/material";
import useDetailed from "./service";
function Detailed({ handleSaveButtonClicked, handleClose }) {
  const {
    formData,
    handleChange,
    handleBlur,
    userFirstNameFilledError,
    userLastNameFilledError,
    userAgeFilledError,
    consultationDateFilledError,
    diagnosticFilledError,
    medicalObervationFilledError,
    diagnosticResultFilledError,
    treatmentFilledError,
    userNature,
  } = useDetailed();

  return (
    <Container>
      <Grid container justifyContent={"center"} sx={{ mt: 1 }} spacing={2}>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            fullWidth
            name="firstName"
            label="First Name"
            id="firstName"
            variant="outlined"
            value={formData.firstName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={userFirstNameFilledError}
            helperText={userFirstNameFilledError && "First Name is required"}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            fullWidth
            name="lastName"
            label="Last Name"
            id="lastName"
            variant="outlined"
            value={formData.lastName}
            onChange={handleChange}
            onBlur={handleBlur}
            error={userLastNameFilledError}
            helperText={userLastNameFilledError && "Last Name is required"}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            fullWidth
            name="age"
            label="Age"
            id="age"
            variant="outlined"
            value={formData.age}
            onChange={handleChange}
            onBlur={handleBlur}
            error={userAgeFilledError}
            helperText={userAgeFilledError && "age is required"}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            sx={{ backgroundColor: "#eeeeee", borderRadius: 1 }}
            disabled={userNature === "patient"}
            required
            fullWidth
            name="consultationDate"
            label="Date de consultation"
            id="consultationDate"
            variant="outlined"
            value={formData.consultationDate}
            onChange={handleChange}
            onBlur={handleBlur}
            error={consultationDateFilledError}
            helperText={
              consultationDateFilledError && "consultation date is required"
            }
          />
        </Grid>

        <Grid item xs={12} sm={4}>
          <TextField
            sx={{ backgroundColor: "#eeeeee", borderRadius: 1 }}
            disabled={userNature === "patient"}
            required
            fullWidth
            name="diagnostic"
            label=" Diagnostic"
            id="diagnostic"
            variant="outlined"
            value={formData.consultationDate}
            onChange={handleChange}
            onBlur={handleBlur}
            error={diagnosticFilledError}
            helperText={diagnosticFilledError && "Diagnostic is required"}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            sx={{ backgroundColor: "#eeeeee", borderRadius: 1 }}
            disabled={userNature === "patient"}
            required
            fullWidth
            name="medicalObservation"
            label=" Observation Medicale"
            id=" medicalObservation"
            variant="outlined"
            value={formData.consultationDate}
            onChange={handleChange}
            onBlur={handleBlur}
            error={medicalObervationFilledError}
            helperText={
              medicalObervationFilledError && "Medical Observation is required"
            }
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            sx={{ backgroundColor: "#eeeeee", borderRadius: 1 }}
            required
            disabled={userNature === "patient"}
            fullWidth
            name="diagnosticResult"
            label=" Resultat de diagnostic"
            id=" diagnosticResult"
            variant="outlined"
            value={formData.consultationDate}
            onChange={handleChange}
            onBlur={handleBlur}
            error={diagnosticResultFilledError}
            helperText={
              diagnosticResultFilledError && "Diagnostic Result is required"
            }
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            sx={{ backgroundColor: "#eeeeee", borderRadius: 1 }}
            disabled={userNature === "patient"}
            required
            fullWidth
            name="treatment "
            label=" Treatment "
            id="treatment "
            variant="outlined"
            value={formData.consultationDate}
            onChange={handleChange}
            onBlur={handleBlur}
            error={treatmentFilledError}
            helperText={treatmentFilledError && "Treatment  is required"}
          />
        </Grid>
        <Grid item xs={12} sm={4}></Grid>
        <Grid item xs={12} sm={4}>
          <Grid item>
            <Button
              sx={{ mr: 2 }}
              variant="contained"
              onClick={() => handleSaveButtonClicked(formData)}
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
