import React from "react";
import { Button, Container, Grid } from "@mui/material";
import UserTable from "../list";
import CreateUser from "../create";
import EditUser from "../edit";
import RemoveUser from "../remove";
import DetailsUser from "../userDetails";
import useMain from "./service";
function Main() {
  const {
    createOpen,
    handleCreateClose,
    handleAddNewUserClick,
    editOpen,
    handleEditClose,
    handleEditClick,
    selectedUser,
    removeOpen,
    handleRemoveClose,
    handleRemoveClick,
    detailsOpen,
    handleDetailsClose,
    handleDetailsClick,
  } = useMain();

  return (
    <Container
      sx={{
        position: "absolute",
        top: 100,
        left: "50%",
        transform: "translateX(-50%)",
      }}
    >
      <Grid container flexDirection={"column"}>
        <Grid item>
          <UserTable
            handleEditClick={handleEditClick}
            handleRemoveClick={handleRemoveClick}
            handleDetailsClick={handleDetailsClick}
          />
        </Grid>
        <Grid
          item
          alignSelf={"flex-end"}
          sx={{ position: "absolute", bottom: "-3rem", right: "4.8rem" }}
        >
          <Button variant="contained" onClick={handleAddNewUserClick}>
            Add New User
          </Button>
        </Grid>
        <Grid item>
          <CreateUser open={createOpen} handleClose={handleCreateClose} />
        </Grid>
        <Grid item>
          <EditUser
            open={editOpen}
            handleClose={handleEditClose}
            user={selectedUser}
          />
        </Grid>
        <Grid item>
          <RemoveUser open={removeOpen} handleClose={handleRemoveClose} />
        </Grid>
        <Grid item>
          <DetailsUser open={detailsOpen} handleClose={handleDetailsClose} />
        </Grid>
      </Grid>
    </Container>
  );
}

export default Main;
