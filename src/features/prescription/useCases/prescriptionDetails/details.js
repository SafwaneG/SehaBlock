import {
  Grid,
  Container,
  Button,
  Typography,
  Divider,
  Paper,
  Card,
  CardContent,
  List,
  ListItem,
  ListItemText,
  Box,
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableRow,
} from "@mui/material";

function Details({ selectedPrescreption }) {
  return (
    <>
      <CardContent>
        <Typography variant="h5" component="h2" gutterBottom>
          Prescription Details
        </Typography>
        <Grid container spacing={3}>
          <Grid item xs={12} sm={6}>
            <Paper elevation={3} variant="outlined" sx={{ px: 3, py: 2 }}>
              <Typography variant="h6" component="h3" gutterBottom>
                Patient Information
              </Typography>
              <Typography variant="body1" gutterBottom>
                Patient Name: {selectedPrescreption?.patientName}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Signed by Patient:{" "}
                {selectedPrescreption?.signedByPatient ? "Yes" : "No"}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12} sm={6}>
            <Paper elevation={3} variant="outlined" sx={{ px: 3, py: 2 }}>
              <Typography variant="h6" component="h3" gutterBottom>
                Doctor Information
              </Typography>
              <Typography variant="body1" gutterBottom>
                Doctor Name: {selectedPrescreption?.doctorName}
              </Typography>
              <Typography variant="body1" gutterBottom>
                Signed by Doctor:{" "}
                {selectedPrescreption?.signedByDoctor ? "Yes" : "No"}
              </Typography>
            </Paper>
          </Grid>
          <Grid item xs={12}>
            <Table>
              <TableHead>
                <TableRow>
                  <TableCell
                    style={{
                      backgroundColor: "#42a5f5",
                      color: "white",
                      fontSize: { xl: 16 },
                      textAlign: "left",
                    }}
                  >
                    Medication Name
                  </TableCell>
                  <TableCell
                    style={{
                      backgroundColor: "#42a5f5",
                      color: "white",
                      fontSize: { xl: 16 },
                      textAlign: "left",
                    }}
                  >
                    Quantity
                  </TableCell>
                  <TableCell
                    style={{
                      backgroundColor: "#42a5f5",
                      color: "white",
                      fontSize: { xl: 16 },
                      textAlign: "left",
                    }}
                  >
                    Dosage
                  </TableCell>
                  <TableCell
                    style={{
                      backgroundColor: "#42a5f5",
                      color: "white",
                      fontSize: { xl: 16 },
                      textAlign: "left",
                    }}
                  >
                    Signed by Pharmacy
                  </TableCell>
                </TableRow>
              </TableHead>
              <TableBody>
                {selectedPrescreption?.medications.map((medication, index) => (
                  <TableRow key={index}>
                    <TableCell>{medication.medicationName}</TableCell>
                    <TableCell>{medication.quantity}</TableCell>
                    <TableCell>{medication.dosage}</TableCell>
                    <TableCell>
                      {medication.signedbyPharmacie ? "Yes" : "No"}
                    </TableCell>
                  </TableRow>
                ))}
              </TableBody>
            </Table>
          </Grid>
        </Grid>
      </CardContent>
    </>
  );
}

export default Details;
