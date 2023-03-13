import React, { useState } from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import { IconButton } from "@mui/joy";
import { StylesProvider, createGenerateClassName } from "@mui/styles";

// import { createTheme } from "@mui/styles";
// import { ThemeProvider } from "@mui/material/styles";

// const theme = createTheme();

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      // background: "#808080",
      // margin: theme.spacing(2),
    },
  },
}));

function SkillForm() {
  const classes = useStyles();
  const [inputFields, setInputField] = useState([
    { firstName: "", lastName: "" },
  ]);

  return (
    <Container>
      <h1>Add new Skill here</h1>
      <form className={classes.root}>
        {inputFields.map((inputField, index) => (
          <div key={index}>
            <TextField
              name="firstName"
              label="First Name"
              variant="filled"
              value={inputField.firstName}
            />
            <TextField
              name="lastName"
              label="Last Name"
              variant="filled"
              value={inputField.lastName}
            />
          </div>
        ))}
      </form>
    </Container>
  );
}

export default SkillForm;
