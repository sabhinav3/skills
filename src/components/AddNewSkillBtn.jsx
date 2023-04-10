import React, { useState } from "react";
import styled from "styled-components";
import "/Users/sabhinav/nearbuzz/skills/src/index.css";
import ControlPointRoundedIcon from "@mui/icons-material/ControlPointRounded";
import { Link } from "react-router-dom";
import SkillAssessmentForm from "./SkillAssessmentForm";

const Button = styled.button`
  background-color: #f05d23;
  text-decoration: none;
  color: white;
  font-size: 15px;
  padding: 10px 60px;
  border-radius: 10px;
  margin: 10px 10px;
  margin-right: 10px;
  border-radius: 10px;
  display: inline-flex;
  flex-direction: row;
  justify-content: center;
  align-items: center;
  padding: 10px 14px;
  gap: 10px;
  cursor: pointer;
  margin-left: 40px;
`;

export const AddButton = (props) => {
  const AddSkillComponent = () => {
    const [addSkill, setAddSkill] = useState(0);
  };

  return (
    <div className="button-underline">
      <Link to="/manageSkills">
        <Button>
          <ControlPointRoundedIcon />
          Add New Skills
        </Button>

        {/* {Array(addSkill).fill(<SkillAssessmentForm />)} */}
      </Link>
    </div>
  );
};
