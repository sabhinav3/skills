import React, { useState } from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import RemoveIcon from "@mui/icons-material/RemoveCircleOutlineRounded";
import SendIcon from "@mui/icons-material/SendRounded";
import SkillAssessmentForm from "./SkillAssessmentForm";
import { AddSkillsForm } from "./AddSkillsForm";
import { CompressOutlined } from "@mui/icons-material";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      // background: "#808080",
      // margin: theme.spacing(2), // this is not working
    },
  },
}));

function ManageSkillForm(props) {
  const classes = useStyles();
  const [inputSkills, setInputSkills] = useState(props.mySkills);

  console.log(inputSkills);

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("inputSkills:", inputSkills);
  };

  const handleAddSkills = (skillSet) => {
    setInputSkills([...inputSkills, skillSet]);
  };

  return (
    <Container>
      <h1>Add new Skill here</h1>
      <form onSubmit={handleSubmit}>
        <AddSkillsForm handleAddSkills={handleAddSkills} />
        {inputSkills?.map((skill) => (
          <div>
            <SkillAssessmentForm skill={skill} />
          </div>
        ))}

        <div className="sendButtonForm">
          <Button
            className="sendButtonForm"
            endIcon={<SendIcon />}
            onClick={handleSubmit}
          >
            Save
          </Button>
        </div>
      </form>
    </Container>
  );
}

export default ManageSkillForm;
