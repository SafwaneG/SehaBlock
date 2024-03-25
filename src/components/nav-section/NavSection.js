import PropTypes from "prop-types";
import { NavLink as RouterLink, useNavigate } from "react-router-dom";
// @mui
import {
  Box,
  List,
  ListItemText,
  Typography,
  Button,
  Menu,
  MenuItem,
  Divider,
} from "@mui/material";
import PopupState, { bindTrigger, bindMenu } from "material-ui-popup-state";
//
import { StyledNavItem, StyledNavItemIcon } from "./styles";
import Iconify from "../iconify/Iconify";
// ----------------------------------------------------------------------

NavSection.propTypes = {
  data: PropTypes.array,
};

export default function NavSection({ data = [], role, ...other }) {
  return (
    <Box {...other}>
      <List disablePadding sx={{ p: 1 }}>
        {data.map((item, i) => (
          <div key={i}>
            {item.usersAuth.includes(role) && (
              <NavItem key={item.title} item={item} />
            )}
            {item.usersAuth.includes(role) && item.divider && (
              <Divider sx={{ mb: 2, mt: 1 }} />
            )}
          </div>
        ))}
      </List>
    </Box>
  );
}

// ----------------------------------------------------------------------

NavItem.propTypes = {
  item: PropTypes.object,
};

function NavItem({ item }) {
  const navigate = useNavigate();
  const { title, path, icon, info, expand, expandData, divider } = item;
  const handleNavigate = (path) => {
    if (path === "/dashboard/request" ) {
      navigate(path);
      window.location.reload(false);
    }
    navigate(path);
  };

  return !expand ? (
    <StyledNavItem
      onClick={() => handleNavigate(path)}
      sx={{
        "&.active": {
          color: "text.primary",
          bgcolor: "action.selected",
          fontWeight: "fontWeightBold",
        },
      }}
    >
      <StyledNavItemIcon>{icon && icon}</StyledNavItemIcon>

      <ListItemText disableTypography primary={title} />

      {info && info}
    </StyledNavItem>
  ) : (
    <PopupState variant="popover" popupId="demo-popup-menu">
      {(popupState) => (
        <>
          <StyledNavItem
            sx={{
              "&.active": {
                color: "text.primary",
                bgcolor: "action.selected",
                fontWeight: "fontWeightBold",
              },
            }}
            {...bindTrigger(popupState)}
          >
            <StyledNavItemIcon>{icon && icon}</StyledNavItemIcon>

            <ListItemText disableTypography primary={title} />
            {!popupState.isOpen ? (
              <Iconify icon="ep:arrow-down-bold" />
            ) : (
              <Iconify icon="ep:arrow-up-bold" />
            )}
          </StyledNavItem>
          <Menu
            {...bindMenu(popupState)}
            PaperProps={{
              style: {
                width: 250,
              },
            }}
          >
            {expandData.map((expandData, i) => (
              <MenuItem key={i} onClick={popupState.close}>
                <StyledNavItem
                  component={RouterLink}
                  to={expandData.path}
                  sx={{
                    width: "xs",
                    "&.active": {
                      color: "text.primary",
                      bgcolor: "action.selected",
                      fontWeight: "fontWeightBold",
                    },
                  }}
                  onClick={popupState.close}
                >
                  <ListItemText disableTypography primary={expandData.title} />

                  {info && info}
                </StyledNavItem>
              </MenuItem>
            ))}
          </Menu>
        </>
      )}
    </PopupState>
  );
}
