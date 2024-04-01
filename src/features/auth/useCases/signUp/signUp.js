import Button from "@mui/material/Button";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";
import Typography from "@mui/material/Typography";
import Radio from "@mui/material/Radio";
import RadioGroup from "@mui/material/RadioGroup";
import FormControl from "@mui/material/FormControl";
import FormLabel from "@mui/material/FormLabel";
import FormControlLabel from "@mui/material/FormControlLabel";
import useSignUp from "./service";

export default function SignUpForm(props) {
  const {
    userNature,
    handleUserNatureChange,
    onSignUp,
    accountAddress,
    onChange,
    submit,
    isError,
  } = useSignUp();
  return (
    <Box
      sx={{
        mx: 4,
        display: "flex",
        flexDirection: "column",
        alignItems: "center",
      }}
    >
      <Typography component="h1" variant="h5">
        Sign Up
      </Typography>
      <Box noValidate sx={{ mt: 1 }}>
        <TextField
          margin="normal"
          required
          fullWidth
          id="name"
          label="Name"
          name="name"
          autoFocus
          onChange={onChange}
        />
        <TextField
          margin="normal"
          required
          fullWidth
          id="key"
          label="Public Key"
          name="publicKey"
          value={props.accountAddress}
          disabled
          onChange={onChange}
        />
        <FormControl>
          <RadioGroup
            row
            aria-labelledby="demo-row-radio-buttons-group-label"
            name="row-radio-buttons-group"
            onChange={handleUserNatureChange}
          >
            <FormControlLabel
              value="patient"
              control={<Radio />}
              label="Patient"
            />
            <FormControlLabel
              value="doctor"
              control={<Radio />}
              label="Doctor"
            />
            <FormControlLabel
              value="pharmacy"
              control={<Radio />}
              label="Pharmacy"
            />
          </RadioGroup>
        </FormControl>
        {userNature == "doctor" ? (
          <TextField
            margin="normal"
            required
            fullWidth
            name="identifier"
            label="Licence Number"
            id="identifier"
            onChange={onChange}
          />
        ) : userNature == "patient" ? (
          <TextField
            margin="normal"
            required
            fullWidth
            name="identifier"
            label="Insurance Number"
            id="identifier"
            onChange={onChange}
          />
        ) : userNature == "pharmacy" ? (
          <TextField
            margin="normal"
            required
            fullWidth
            name="identifier"
            label="Patent Number "
            id="identifier"
            onChange={onChange}
          />
        ) : null}
        <TextField
          margin="normal"
          required
          fullWidth
          name="password"
          label="Password"
          type="password"
          id="password"
          onChange={onChange}
        />
        <Button
          type="submit"
          fullWidth
          variant="contained"
          sx={{ mt: 3, mb: 1 }}
          onClick={submit}
        >
          Sign Up
        </Button>
      </Box>
    </Box>
  );
}
