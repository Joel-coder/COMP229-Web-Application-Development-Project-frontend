import React, { useState, useEffect } from "react";
import TextField from "@mui/material/TextField";
import Container from "@mui/material/Container";
import Button from "@mui/material/Button";
import API from "../../api";
import { FormHelperText } from "@mui/material";
//require("typeface-poppins");
//require("typeface-inter");
import { useRouter } from "next/router";

export default function Login() {
  const router = useRouter();
  const [arrTable, setArrTable] = useState({});
  const [name, setName] = useState("");

  const [password, setPassword] = useState("");
  const handleSubmit = () => {
    const accountData = {
      username: name,
      password: password,
    };
    API()
      .post(`/login`, accountData) // example .get
      .then((response) => {
        if (response.data) {
          console.log("success ");
        }
      });
  };

  return (
    <>
      <Container maxWidth="sm" className={"form-container"}>
        <TextField
          id="standard-basic"
          label="username"
          variant="standard"
          name="username"
          onChange={(event) => {
            setName(event.target.value);
          }}
        />
        <TextField
          id="standard-basic"
          label="password"
          variant="standard"
          name="password"
          onChange={(event) => {
            setPassword(event.target.value);
          }}
        />
        <FormHelperText
          variant="standard"
          label={'margin="none"'}
          onClick={() => router.push("/register")}
        >
          don't have an account? click here to register
        </FormHelperText>
        <Button type="button" variant="text" onClick={handleSubmit}>
          Submit
        </Button>
      </Container>
    </>
  );
}
