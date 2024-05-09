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
function Detailed({ handleSaveButtonClicked, user, handleClose }) {
  const {
    formData,
    processRoles,
    serviceRoles,
    grades,
    services,
    handleChange,
    handleBlur,
    userFirstNameFilledError,
    userLastNameFilledError,
    userPhoneFilledError,
    userGradeFilledError,
    userServiceFilledError,
    userProcessRoleFilledError,
    userServiceRoleFilledError,
    validation,
  } = useDetailed(user);

  return (
    <Container>
      <Grid container justifyContent={"center"} sx={{ mt: 1 }} spacing={2}>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            fullWidth
            name="firstname"
            label="First Name"
            id="firstName"
            variant="outlined"
            value={formData.firstname}
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
            name="lastname"
            label="last Name"
            id="lastName"
            variant="outlined"
            value={formData.lastname}
            onChange={handleChange}
            onBlur={handleBlur}
            error={userLastNameFilledError}
            helperText={userLastNameFilledError && "Last Name is required"}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            fullWidth
            name="email"
            label="Email"
            id="email"
            variant="outlined"
            value={formData.email}
            onChange={handleChange}
            onBlur={handleBlur}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <TextField
            required
            fullWidth
            name="telephone"
            label="Tel"
            placeholder="eg, +212 6 XX XX XX XX"
            id="telephone"
            variant="outlined"
            value={formData.telephone}
            onChange={handleChange}
            onBlur={handleBlur}
            error={userPhoneFilledError}
            helperText={userPhoneFilledError && "Phone number is required"}
          />
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Rôle service</InputLabel>
            <Select
              required
              name="serviceRole"
              id="serviceRole"
              label="Rôle service"
              value={formData.serviceRole}
              onChange={handleChange}
              onBlur={handleBlur}
              error={userServiceRoleFilledError}
            >
              {serviceRoles.map((role) => (
                <MenuItem key={role.id} value={role.label}>
                  {role.label}
                </MenuItem>
              ))}
            </Select>
            {userServiceRoleFilledError && (
              <FormHelperText sx={{ color: "red" }}>
                Sélectionne le rôle dans le service.
              </FormHelperText>
            )}
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">
              Rôle processus
            </InputLabel>
            <Select
              required
              name="role"
              id="role"
              label="Rôle processus"
              value={formData.role}
              onChange={handleChange}
              onBlur={handleBlur}
              error={userProcessRoleFilledError}
            >
              {processRoles.map((role) => (
                <MenuItem key={role.id} value={role.label}>
                  {role.label}
                </MenuItem>
              ))}
            </Select>
            {userProcessRoleFilledError && (
              <FormHelperText sx={{ color: "red" }}>
                Sélectionne le rôle dans le processus.
              </FormHelperText>
            )}
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Service</InputLabel>
            <Select
              required
              name="service"
              id="service"
              label="Service"
              value={formData.service}
              onChange={handleChange}
              onBlur={handleBlur}
              error={userServiceFilledError}
            >
              {services.map((service) => (
                <MenuItem key={service.id} value={service.label}>
                  {service.label}
                </MenuItem>
              ))}
            </Select>
            {userServiceFilledError && (
              <FormHelperText sx={{ color: "red" }}>
                Sélectionne le service.
              </FormHelperText>
            )}
          </FormControl>
        </Grid>
        <Grid item xs={12} sm={4}>
          <FormControl fullWidth>
            <InputLabel id="demo-simple-select-label">Grade</InputLabel>
            <Select
              required
              name="grade"
              id="grade"
              label="Grade"
              value={formData.grade}
              onChange={handleChange}
              onBlur={handleBlur}
              error={userGradeFilledError}
            >
              {grades.map((grade) => (
                <MenuItem key={grade.id} value={grade.label}>
                  {grade.label}
                </MenuItem>
              ))}
            </Select>
            {userGradeFilledError && (
              <FormHelperText sx={{ color: "red" }}>
                Sélectionne le grade.
              </FormHelperText>
            )}
          </FormControl>
        </Grid>
        <Grid
          container
          item
          xs={12}
          sm={12}
          justifyContent={"center"}
          sx={{ mt: 1 }}
        >
          <Grid item>
            <Button
              sx={{ mr: 2 }}
              variant="contained"
              onClick={() => handleSaveButtonClicked(formData, validation)}
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
