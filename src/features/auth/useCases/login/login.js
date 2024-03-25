import * as React from "react";
//import MUI components
import {
  Button,
  CssBaseline,
  TextField,
  Link,
  Grid,
  Box,
  Container,
} from "@mui/material";

//import icons
import VisibilityIcon from "@mui/icons-material/Visibility";
import VisibilityOffIcon from "@mui/icons-material/VisibilityOff";

// import customStyles from "./styles.js";
import styles from "./styles.js";
//import useLogin custom hook from "service.js"
import useLogin from "./services.js";
import { isFocusable } from "@testing-library/user-event/dist/utils/index.js";

export default function Login() {
  //destructuring functions and states from custom hook "useLogin"
  const {
    handleInputChange,
    handleSubmit,
    handleShowPassword,
    handleEmailBlur,
    loginData,
    emailValid,
    error,
    showPassword,
    resetPassword,
    handleForgetPasswordClicked,
    handleResetPassword,
  } = useLogin();

  return (
    <Container component="main" maxWidth="xs" sx={{ overflow: "hidden" }}>
      <CssBaseline />
      <Box sx={styles.box}>
        <img src={require("./assets/dailyAppLogo.png")} alt="" />
        <Box
          component="form"
          onSubmit={handleSubmit}
          noValidate
          sx={styles.form}
        >
          {resetPassword ? (
            <>
              <TextField
                onChange={handleInputChange}
                margin="normal"
                required
                fullWidth
                id="resetEmail"
                type="email"
                label="Email Address"
                name="resetPasswordEmail"
                autoComplete="email"
                autoFocus
                value={loginData.resetPasswordEmail}
                onBlur={handleEmailBlur}
                inputProps={isFocusable}
              />
              <Button
                fullWidth
                variant="contained"
                sx={styles.loginButton}
                onClick={handleResetPassword}
              >
                Reset Password
              </Button>
              <Grid container justifyContent="center">
                <Grid item>
                  <Link
                    variant="body2"
                    fontSize="medium"
                    onClick={handleForgetPasswordClicked}
                    sx={{ cursor: "pointer", fontSize: 20 }}
                  >
                    LogIn
                  </Link>
                </Grid>
              </Grid>
            </>
          ) : (
            <>
              <TextField
                onChange={handleInputChange}
                margin="normal"
                required
                fullWidth
                id="email"
                type="email"
                label="Email Address"
                name="email"
                autoComplete="email"
                autoFocus
                error={error || emailValid}
                value={loginData.email}
                onBlur={handleEmailBlur}
                helperText={emailValid && "Invalid email address"}
                inputProps={isFocusable}
              />

              <TextField
                onChange={handleInputChange}
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type={showPassword ? "text" : "password"}
                id="password"
                autoComplete="current-password"
                error={error}
                value={loginData.password}
                InputProps={{
                  endAdornment: !showPassword ? (
                    <VisibilityOffIcon
                      onClick={handleShowPassword}
                      sx={{ cursor: "pointer", opacity: 0.8 }}
                      color="primary"
                    />
                  ) : (
                    <VisibilityIcon
                      onClick={handleShowPassword}
                      sx={{ cursor: "pointer", opacity: 0.8 }}
                      color="primary"
                    />
                  ),
                }}
              />
              <Button
                fullWidth
                variant="contained"
                sx={styles.loginButton}
                onClick={handleSubmit}
              >
                Log In
              </Button>
              <Grid container justifyContent="center">
                <Grid item>
                  <Link
                    variant="body2"
                    fontSize="medium"
                    onClick={handleForgetPasswordClicked}
                    sx={{ cursor: "pointer" }}
                  >
                    Forgotten password?
                  </Link>
                </Grid>
              </Grid>
            </>
          )}
        </Box>
      </Box>
    </Container>
  );
}
