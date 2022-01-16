import React, { useState, useEffect } from "react";
import Table from "@mui/material/Table";
import TableBody from "@mui/material/TableBody";
import TableCell from "@mui/material/TableCell";
import TableContainer from "@mui/material/TableContainer";
import TableHead from "@mui/material/TableHead";
import TableRow from "@mui/material/TableRow";
import Paper from "@mui/material/Paper";
import Container from "@mui/material/Container";
import API from "../../api";
import { useRouter } from "next/router";
import { DataGrid } from "@mui/x-data-grid";
//require("typeface-poppins");
//require("typeface-inter");

export default function Survey() {
  const router = useRouter();
  const [token, setToken] = useState(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNzVkNGFkNmQ3NjQ5N2U3MmZiMjg4NiIsInVzZXJuYW1lIjoianZhcmdhcyIsImlhdCI6MTY0MjI3NDMxMywiZXhwIjoxNjQyODc5MTEzfQ.KaVYq_LyIKBihet3aR4DYu1LBL_77XCB5FAQ3i9gEPw"
  );
  const [rows, setRows] = useState();

  useEffect(() => {
    API()
      .get(`/contactInfo/`, {
        headers: {
          authorization: "Bearer " + token,
          accept: "application/json",
          "Content-Type": "multipart/form-data",
        },
      }) // example .get
      .then((response) => {
        if (response.data) {
          console.log("response ", response.data);
          setRows(response.data);
        }
      });
  }, []);

  return (
    <>
      <Container className={"mt-5"}>
        <TableContainer component={Paper}>
          <Table sx={{ minWidth: 650 }} size="small" aria-label="a dense table">
            <TableHead>
              <TableRow>
                <TableCell align="right">ID</TableCell>
                <TableCell align="right">Contact name</TableCell>
                <TableCell align="right">contact number</TableCell>
                <TableCell align="right">email</TableCell>
              </TableRow>
            </TableHead>
            <TableBody>
              {rows &&
                rows.map((row) => (
                  <TableRow
                    key={row.name}
                    sx={{ "&:last-child td, &:last-child th": { border: 0 } }}
                  >
                    <TableCell align="right">{row._id}</TableCell>
                    <TableCell align="right">{row.contact_name}</TableCell>
                    <TableCell align="right">{row.contact_number}</TableCell>
                    <TableCell align="right">{row.email}</TableCell>
                  </TableRow>
                ))}
            </TableBody>
          </Table>
        </TableContainer>
      </Container>
    </>
  );
}
