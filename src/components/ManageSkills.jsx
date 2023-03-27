// import React, { Component } from "react";
import React, { useState } from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "/Users/sabhinav/nearbuzz/skills/src/index.css";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import "@fontsource/roboto";
import question from "/Users/sabhinav/nearbuzz/skills/src/images/question.png";
import SkillExperience from "./SkillExperience";
import { MarkExpertSkilll } from "./MarkExpertSkill";
import { AddSkills } from "./AddSkills";
import { AddButton } from "./AddNewSkillBtn";
import { SkillName } from "./SkillName";
import { Link } from "react-router-dom";
import { SliderValue } from "./SkillProficiency";
import { SkillLevelSelect } from "./SkillLevelSelect";

export const ManageSkills = (props) => {
  const [selectedLevel, setSelectedLevel] = useState(1);

  return (
    <Container>
      <>
        <div className="navbar">
          <Link to="/" className="navbar">
            <ArrowBackRoundedIcon />
            <p>Manage Skills</p>
          </Link>
        </div>

        <div className="introduction">
          Add new skills you possess or update existing.
          <p>Assess yourself in the skills you have selected.</p>
        </div>
        <div className="searchBar">
          <AddSkills />
          <AddButton />
        </div>

        <Row>
          <SkillName nameOfSkill="UX Design" />
        </Row>

        <Row>
          <Col>
            <div className="selectLevel">
              Select your Level
              <img src={question} className="imageEdit" alt="question_mark" />
            </div>

            <div className="levelFind">
              <SkillLevelSelect
                selectedLevel={selectedLevel}
                onLevelSelect={(level) => setSelectedLevel(level)}
              />
            </div>
            {/* </div> */}
            {/* </SkillName> */}
          </Col>

          <Col>
            <div className="selectLevel">
              Proficiency
              <img src={question} className="imageEdit" alt="question_mark" />
            </div>

            <div>
              <SliderValue />
            </div>
          </Col>
          <Col>
            <div>
              <SkillExperience />
            </div>
          </Col>
        </Row>
      </>
    </Container>
  );
};
