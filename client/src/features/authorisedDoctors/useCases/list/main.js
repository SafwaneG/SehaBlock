import * as React from "react";
import Paper from "@mui/material/Paper";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import { Button } from "@mui/material";

import useUserTable from "./service";

export default function UserTable({
  handleEditClick,
  handleRemoveClick,
  handleDetailsClick,
}) {
  const { doctorsIds, authorisedDoctors } = useUserTable();
  const rows = doctorsIds;
  const columns = [
    { id: "doctorAddress", Label: "Doctor's Address" },
    { id: "name", Label: "Full Name" },
    { id: "actions", Label: "" },
  ];

  return (
    <Paper
      sx={{ width: { lg: "90%", xl: "100%" }, overflow: "hidden", mx: "auto" }}
    >
      <TableContainer
        sx={{ maxHeight: { lg: 400, xl: "35vw" }, maxWidth: { xl: "100%" } }}
      >
        <Table stickyHeader aria-label="sticky table">
          <TableHead>
            <TableRow
              sx={{
                textDecoration: "none",
                width: "100%",
                height: { xl: "14vh" },
              }}
            >
              {columns.map((column) => (
                <TableCell
                  key={column.id}
                  style={{
                    minWidth: column.minWidth,
                    backgroundColor: "#42a5f5",
                    color: "white",
                    fontSize: { xl: 16 },
                    textAlign: column.id === "actions" ? "center" : "left",
                  }}
                >
                  {column.Label}
                </TableCell>
              ))}
            </TableRow>
          </TableHead>
          <TableBody>
            {rows.map((row) => {
              return (
                <TableRow
                  hover
                  key={row}
                  sx={{
                    textDecoration: "none",
                    width: "100%",
                    height: { xl: "14vh" },
                  }}
                >
                  {columns.map((column) => {
                    const value =
                      column.id !== "actions" ? (
                        authorisedDoctors[row][column.id]
                      ) : (
                        <>
                          <Button
                            variant="contained"
                            color="error"
                            size="small"
                            sx={{ mr: 2 }}
                            onClick={() => handleRemoveClick(row)}
                          >
                            Remove Doctor
                          </Button>
                        </>
                      );
                    return (
                      <TableCell
                        key={column.id}
                        align={column.id === "actions" ? "center" : "left"}
                        sx={{ fontSize: { xl: 16 } }}
                      >
                        {value}
                      </TableCell>
                    );
                  })}
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
      </TableContainer>
    </Paper>
  );
}
