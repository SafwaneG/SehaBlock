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
function Details({ selectedRecord }) {
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
                {`Record--${selectedRecord?.recordId}`}
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
                  Nom Complet : {selectedRecord?.Fname} {selectedRecord?.Lname}
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
                  Age: {selectedRecord?.age}
                </Typography>
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
                  Date de consultation : {selectedRecord?.date_consultation}
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
                  Diagnostic : {selectedRecord?.diagnostic}
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
                  Observation Medicale : {selectedRecord?.observation_Medicale}
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
                  Resultat de diagnostic : {selectedRecord?.resulta_diagnostic}
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
                  Treatment : {selectedRecord?.treatment}
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
