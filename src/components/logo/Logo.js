import { Link as RouterLink } from "react-router-dom";
// @mui
import { Box, Link } from "@mui/material";
import logo from "./logo.png";
// ----------------------------------------------------------------------

function Logo() {
  return (
    <Link to="/" component={RouterLink} sx={{ display: "contents" }}>
      <Box
        component="div"
        sx={{
          width: "40%",
          margin: "0 auto",
          display: "inline-flex",
        }}
      >
        <img src={logo} alt="" />
      </Box>
    </Link>
  );
}

export default Logo;
