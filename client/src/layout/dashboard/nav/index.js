import PropTypes from "prop-types";
import { useEffect } from "react";
import { useLocation } from "react-router-dom";
// @mui
import { Box, Drawer } from "@mui/material";

import authSelectors from "../../../features/auth/selectors";
import Logo from "../../../components/logo/Logo";
import Scrollbar from "../../../components/scrollbar";
import NavSection from "../../../components/nav-section/NavSection";
//
import navConfig from "./config";
import { useSelector } from "react-redux";
//

// ----------------------------------------------------------------------

const NAV_WIDTH = 280;

// ----------------------------------------------------------------------

Nav.propTypes = {
  openNav: PropTypes.bool,
  onCloseNav: PropTypes.func,
};

export default function Nav({ openNav, onCloseNav }) {
  const { userNature } = useSelector(authSelectors.user);
  const { pathname } = useLocation();
  useEffect(() => {
    if (openNav) {
      onCloseNav();
    }
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, [pathname]);

  return (
    <Box
      component="nav"
      sx={{
        flexShrink: { lg: 0 },
        width: { lg: NAV_WIDTH },
      }}
    >
      <Drawer
        open={openNav}
        onClose={onCloseNav}
        PaperProps={{
          sx: {
            width: NAV_WIDTH,
            bgcolor: "background.default",
          },
        }}
        ModalProps={{
          keepMounted: true,
        }}
      >
        <Scrollbar
          sx={{
            overFlow: "hidden",
            height: 1,
            "& .simplebar-content": {
              height: 1,
              display: "flex",
              flexDirection: "column",
            },
          }}
        >
          <Box sx={{ px: 2.5, py: 3, display: "inline-flex" }}>
            <Logo />
          </Box>
          <NavSection data={navConfig} userNature={userNature} />
        </Scrollbar>
      </Drawer>
    </Box>
  );
}
