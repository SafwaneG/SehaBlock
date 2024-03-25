import * as React from "react";
import Avatar from "@mui/material/Avatar";
import Button from "@mui/material/Button";
import CssBaseline from "@mui/material/CssBaseline";
import TextField from "@mui/material/TextField";
import FormControlLabel from "@mui/material/FormControlLabel";
import Checkbox from "@mui/material/Checkbox";
import Link from "@mui/material/Link";
import Paper from "@mui/material/Paper";
import Box from "@mui/material/Box";
import Grid from "@mui/material/Grid";
import LockOutlinedIcon from "@mui/icons-material/LockOutlined";
import doctorImage from "./assets/_90cc6613-3207-4beb-9a3e-3a19dbaa9888.jpg";
import metaMask from "./assets/metamask-icon.webp";
import Typography from "@mui/material/Typography";
import useLogin from "./services";
import SignUp from "../signUp";
import { createTheme, ThemeProvider } from "@mui/material/styles";

const defaultTheme = createTheme();

export default function SignInSide() {
  const {
    onConnect,
    isConnected,
    disconnect,
    onChange,
    onSubmit,
    isError,
    formData,
    isSignUpOpen,
    handleClose,
    handleSignUpOpen,
    accountAddress,
  } = useLogin();

  return (
    <ThemeProvider theme={defaultTheme}>
      <Grid container component="main" sx={{ height: "100vh" }}>
        <CssBaseline />
        <Grid
          item
          xs={false}
          sm={4}
          md={7}
          sx={{
            backgroundImage: `url(${doctorImage})`,
            backgroundRepeat: "no-repeat",
            backgroundColor: (t) =>
              t.palette.mode === "light"
                ? t.palette.grey[50]
                : t.palette.grey[900],
            backgroundSize: "cover",
            backgroundPosition: "center",
          }}
        />
        <Grid item xs={12} sm={8} md={5} component={Paper} elevation={6} square>
          <Box
            sx={{
              my: 8,
              mx: 4,
              display: "flex",
              flexDirection: "column",
              alignItems: "center",
            }}
          >
            <Avatar sx={{ m: 1, bgcolor: "secondary.main" }}>
              <LockOutlinedIcon />
            </Avatar>
            <Typography component="h1" variant="h5">
              Sign in
            </Typography>
            <Box sx={{ mt: 1 }}>
              <TextField
                margin="normal"
                required
                fullWidth
                id="key"
                label="Public Key"
                name="publicKey"
                value={formData.publicKey}
                onChange={onChange}
                autoFocus
              />
              <TextField
                margin="normal"
                required
                fullWidth
                name="password"
                label="Password"
                type="password"
                id="password"
                autoComplete="current-password"
                onChange={onChange}
              />
              <Button
                fullWidth
                variant="contained"
                sx={{ mt: 3, mb: 1 }}
                onClick={onSubmit}
              >
                Sign In
              </Button>
              <Button
                type="submit"
                fullWidth
                variant="outlined"
                sx={{ mt: 3, mb: 2 }}
                onClick={onConnect}
              >
                Sign In With meta Mask{" "}
                {
                  <Box
                    sx={{
                      width: 40,
                      height: 40,
                      backgroundImage: `url(${metaMask})`,
                      backgroundRepeat: "no-repeat",
                      backgroundSize: "cover",
                      backgroundPosition: "center",
                      ml: 1,
                    }}
                  />
                }
              </Button>
              <Button
                type="submit"
                fullWidth
                variant="outlined"
                sx={{ mt: 3, mb: 2 }}
                onClick={handleSignUpOpen}
              >
                Sign Up
              </Button>
            </Box>
          </Box>
        </Grid>
        <SignUp
          open={isSignUpOpen}
          handleClose={handleClose}
          accountAddress={accountAddress}
        />
      </Grid>
    </ThemeProvider>
  );
}
