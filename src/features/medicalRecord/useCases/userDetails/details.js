import {
  Grid,
  Container,
  Button,
  Typography,
  Divider,
  Paper,
} from "@mui/material";
import PersonIcon from "@mui/icons-material/Person";
import PhoneIcon from "@mui/icons-material/Phone";
import EmailIcon from "@mui/icons-material/Email";
function Details({ selectedUser }) {
  return (
    <Container>
      <Grid container justifyContent={"center"} spacing={2}>
        <Grid item xs={12} sm={12}>
          <Paper elevation={3} sx={{ p: 2, width: "100%" }}>
            <Grid
              item
              container
              xs={12}
              sm={12}
              alignItems={"center"}
              columnGap={1}
            >
              <PersonIcon sx={{ color: "#37474f", fontSize: 24 }} />
              <Typography variant="h4">
                {`Utilisateur--${selectedUser?.id}`}
              </Typography>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Grid container rowGap={1}>
              <Grid
                item
                container
                xs={12}
                sm={12}
                alignItems={"center"}
                columnGap={1}
              >
                <PersonIcon sx={{ color: "#37474f", fontSize: 24 }} />
                <Typography variant="body1">
                  Nom Complet : {selectedUser?.firstname}{" "}
                  {selectedUser?.lastname}
                </Typography>
              </Grid>
              <Grid
                item
                container
                xs={12}
                sm={6}
                alignItems={"center"}
                columnGap={1}
              >
                <PhoneIcon sx={{ color: "#37474f", fontSize: 24 }} />
                <Typography variant="body1">{selectedUser?.telephone}</Typography>
              </Grid>
              <Grid
                item
                container
                xs={12}
                sm={6}
                alignItems={"center"}
                columnGap={1}
              >
                <EmailIcon sx={{ color: "#37474f", fontSize: 24 }} />
                <Typography variant="body1">{selectedUser?.email}</Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
        <Grid item xs={12} sm={12}>
          <Divider />
        </Grid>
        <Grid item xs={12} sm={12}>
          <Paper elevation={3} sx={{ p: 2 }}>
            <Grid container rowGap={1}>
              <Grid
                item
                container
                xs={12}
                sm={6}
                alignItems={"center"}
                columnGap={1}
              >
                <Typography variant="body1">
                  Rôle dans le service : {selectedUser?.serviceRole}
                </Typography>
              </Grid>
              <Grid
                item
                container
                xs={12}
                sm={6}
                alignItems={"center"}
                columnGap={1}
              >
                <Typography variant="body1">
                  Rôle dans le porcessus : {selectedUser?.role}
                </Typography>
              </Grid>
              <Grid
                item
                container
                xs={12}
                sm={6}
                alignItems={"center"}
                columnGap={1}
              >
                <Typography variant="body1">
                  Grade : {selectedUser?.grade}
                </Typography>
              </Grid>
              <Grid
                item
                container
                xs={12}
                sm={6}
                alignItems={"center"}
                columnGap={1}
              >
                <Typography variant="body1">
                  Service : {selectedUser?.service}
                </Typography>
              </Grid>
            </Grid>
          </Paper>
        </Grid>
      </Grid>
    </Container>
  );
}

export default Details;
