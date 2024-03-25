import { Link as RouterLink } from "react-router-dom";
// @mui
import { Box, Link } from "@mui/material";
import dailyAppLogo from "./dailyAppLogo.png";
// ----------------------------------------------------------------------

function Logo() {
  return (
    <Link to="/" component={RouterLink} sx={{ display: "contents" }}>
      <Box
        component="div"
        sx={{
          width: "70%",
          margin: "0 auto",
          display: "inline-flex",
        }}
      >
        <img src={dailyAppLogo} alt="" />
      </Box>
    </Link>
  );
}

export default Logo;
