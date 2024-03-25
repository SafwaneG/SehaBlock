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
  const { users, userIds } = useUserTable();
  const rows = userIds;
  const columns = [
    { id: "firstname", Label: "Prénom" },
    { id: "lastname", Label: "Nom" },
    { id: "grade", Label: "Grade" },
    { id: "service", Label: "Service" },
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
                        users[row][column.id]
                      ) : (
                        <>
                          <Button
                            variant="outlined"
                            size="small"
                            sx={{ mr: 2 }}
                            onClick={() => handleEditClick(users[row]?.id)}
                          >
                            Edit
                          </Button>
                          <Button
                            variant="outlined"
                            size="small"
                            sx={{ mr: 2 }}
                            color="error"
                            onClick={() => handleRemoveClick(users[row]?.id)}
                          >
                            Delete
                          </Button>
                          <Button
                            variant="outlined"
                            size="small"
                            sx={{ mr: 2 }}
                            onClick={() => handleDetailsClick(row)}
                          >
                            Details
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
