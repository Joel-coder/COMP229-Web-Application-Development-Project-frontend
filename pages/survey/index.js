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
//require("typeface-poppins");
//require("typeface-inter");

export default function Survey() {
  const router = useRouter();
  const [token, setToken] = useState(
    "eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJpZCI6IjYxNzVkNGFkNmQ3NjQ5N2U3MmZiMjg4NiIsInVzZXJuYW1lIjoianZhcmdhcyIsImlhdCI6MTY0MjA5ODk5OSwiZXhwIjoxNjQzNzAzNzk5fQ.6ohMXRCtjiy4OASifZ3ilVQSdTCKCWra_2bgVrLNQpM"
  );

  useEffect(() => {
    if (token) {
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
          }
        });
    }
  }, [token]);

  return <></>;
}
