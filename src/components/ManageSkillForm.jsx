import React, { useState } from "react";
import Container from "@mui/material/Container";
import TextField from "@mui/material/TextField";
import { makeStyles } from "@mui/styles";
import Button from "@mui/material/Button";
import IconButton from "@mui/material/IconButton";
import RemoveIcon from "@mui/icons-material/RemoveCircleOutlineRounded";
import SendIcon from "@mui/icons-material/SendRounded";
import SkillAssessmentForm from "./SkillAssessmentForm";
import AddSkillsForm from "./AddSkillsForm";

const useStyles = makeStyles((theme) => ({
  root: {
    "& .MuiTextField-root": {
      // background: "#808080",
      // margin: theme.spacing(2), // this is not working
    },
  },
}));

function ManageSkillForm() {
  const classes = useStyles();
  const [inputSkills, setInputSkills] = useState([
    {
      id: 0,
      skillName: "",
      isExpertSkill: false,
      level: "beginner",
      proficiency: 0,
      experience: 0,
    },
  ]);

  const handleChangeInput = (index, event) => {
    console.log(index, event.target.name);
    const values = [...inputSkills];
    values[index][event.target.name] = event.target.value;
    setInputSkills(values);
  };

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("inputSkills", inputSkills);
  };

  const handleAddSkills = (skillSet) => {
    setInputSkills([...inputSkills, skillSet]);
  };

  const handleRemoveSkill = (id) => {
    const values = [...inputSkills];
    values.splice(id, 1);
    setInputSkills(values);
  };

  return (
    <Container>
      <h1>Add new Skill here</h1>
      <form onSubmit={handleSubmit} autoComplete="off">
        <AddSkillsForm />
        {inputSkills.map((skillSet) => (
          <div>
            <SkillAssessmentForm
              skillSet={skillSet}
              skillName={inputSkills.skillName}
            />
            <IconButton onClick={handleRemoveSkill(skillSet.id)}>
              <RemoveIcon />
            </IconButton>
            <SkillAssessmentForm skill={skillSet} />
          </div>
        ))}

        <div className="sendButtonForm">
          <Button
            className="sendButtonForm"
            endIcon={<SendIcon />}
            onClick={handleSubmit}
          >
            Send
          </Button>
        </div>
      </form>
    </Container>
  );
}

export default ManageSkillForm;
