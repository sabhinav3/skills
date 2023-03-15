// import React, { Component } from "react";
import React, { useState } from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import "/Users/sabhinav/nearbuzz/skills/src/index.css";
import ArrowBackRoundedIcon from "@mui/icons-material/ArrowBackRounded";
import remove from "/Users/sabhinav/nearbuzz/skills/src/images/remove.png";
import "@fontsource/roboto";
import { TempDetails } from "./TempSkillsDet";
import Slider from "@material-ui/core/Slider";
import Box from "@mui/material/Box";
import question from "/Users/sabhinav/nearbuzz/skills/src/images/question.png";
import empty1 from "/Users/sabhinav/nearbuzz/skills/src/images/Frame-1.png";
import empty2 from "/Users/sabhinav/nearbuzz/skills/src/images/Frame-5.png";
import empty3 from "/Users/sabhinav/nearbuzz/skills/src/images/Frame-9.png";
import empty4 from "/Users/sabhinav/nearbuzz/skills/src/images/Frame-13.png";
import empty5 from "/Users/sabhinav/nearbuzz/skills/src/images/Frame-17.png";
import full1 from "/Users/sabhinav/nearbuzz/skills/src/images/Frame-3.png";
import full2 from "/Users/sabhinav/nearbuzz/skills/src/images/Frame-7.png";
import full3 from "/Users/sabhinav/nearbuzz/skills/src/images/Frame-11.png";
import full4 from "/Users/sabhinav/nearbuzz/skills/src/images/Frame-15.png";
import full5 from "/Users/sabhinav/nearbuzz/skills/src/images/Frame-19.png";
import NumCounter from "./NumCounter";
import { SearchBar } from "./SearchBar";
import { AddButton } from "./AddNewSkillBtn";
import { SkillName } from "./SkillName";
import { Link } from "react-router-dom";
import { calculateNewValue } from "@testing-library/user-event/dist/utils";
import { SliderValue } from "./Slider";
import { LevelSelect } from "./LevelSelect";

const Comp1 = styled.div`
  margin-left: 0px;
  display: inline-flex;
`;

const marks = [
  {
    value: 0,
    label: "0%",
  },
  {
    value: 100,
    label: "100%",
  },
];

const skillIcons = [
  {
    iconId: "1",
    img: { empty1 },
    title: "empty_icon",
  },
  {
    iconId: "2",
    img: { full1 },
    title: "empty_icon",
  },
];

const selected = 0;

function imageClick(e) {
  console.log("click");
  const image = { full2 };
  <img src={full1} className="levelIcons" value="1" alt="1st_level_full" />;
}

const skillIcon = ({ success }) => {
  <img src={success ? full1 : empty1} />;
};

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
          <SearchBar />
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
              {/* <LevelSelect></LevelSelect> */}
              <LevelSelect
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
              <NumCounter />
            </div>
          </Col>
        </Row>
      </>
    </Container>
  );
};
