import { Grid, Container, Button, Typography } from "@mui/material";
import useRemoveRole from "./service";

function ConfirmeRemove(props) {
  return (
    <Container>
      <Grid container justifyContent={"center"} spacing={2}>
        <Grid item xs={12} sm={12}>
          <Typography variant="h4" sx={{ textAlign: "center" }}>
            Êtes-vous sûr(e) de vouloir supprimer cet utilisateur ?
          </Typography>
        </Grid>
        <Grid item xs={12} sm={2} sx={{ mr: 1 }}>
          <Button variant="contained" onClick={props.handleConfirmRemove}>
            Confirmer
          </Button>
        </Grid>
        <Grid item xs={12} sm={2}>
          <Button
            variant="contained"
            color="error"
            onClick={props.handleCancelRemove}
          >
            Annuler
          </Button>
        </Grid>
      </Grid>
    </Container>
  );
}

export default ConfirmeRemove;
