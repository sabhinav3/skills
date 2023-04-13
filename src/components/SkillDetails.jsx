import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link } from "react-router-dom";
import "@fontsource/roboto";
import "/Users/sabhinav/nearbuzz/skills/src/index.css";
import verified from "../images/verified.png";
import pending from "../images/pending.png";
import frame15 from "../images/Frame-15.png";
import proficient from "../images/Frame-25.png";
import intermediate from "../images/Frame-26.png";
import beginner from "../images/Frame-28.png";
import master from "../images/Frame-29.png";
import expert from "../images/Frame-24.png";
import noSkill from "../images/no_assessment.png";
import ModeEditOutlineTwoToneIcon from "@mui/icons-material/ModeEditOutlineTwoTone";

const Comp1 = styled.div`
  margin-left: 0px;
  display: inline-flex;
`;

const Comp2 = styled.div`
  margin-left: 440px;
  display: inline-flex;
`;

const CompInside = styled.div`
  margin-left: 10px;
  display: inline-flex;
`;

export const SkillDetails = (props) => {
  return (
    <>
      <Container>
        <Row>
          <div className="mySkillsPage">
            <Col>
              <div className="mySkillsColumn">
                <div className="mySkillName">
                  <p>
                    <b>{props.skill?.skillName}</b>
                  </p>
                </div>
                <div className="mySkillExpertCheckbox">
                  <p>
                    <br />
                    {!props.skill?.isMarkedExpert && (
                      <div className="checkbox">
                        <input type={"checkbox"}></input>
                        <p className="textCheckbox">
                          Mark this field as expert
                        </p>
                      </div>
                    )}
                  </p>
                </div>
              </div>
            </Col>

            <Col>
              <div className="mySkillLevelDetails">
                <div className="mySkillLevelImage">
                  {levelSelectImage(props)}
                  <b>{levelSelectName(props)}</b>&nbsp; Level with&nbsp;
                  <b>{props.skill?.proficiency} %</b>&nbsp;Proficiency
                </div>

                <div className="mySkillProficiency">
                  <p>{props.skill?.level} Assessments</p>
                </div>
              </div>
            </Col>

            {/* The third column */}
            <div className="selfAssessment">
              <p>Skill Assessment</p>
            </div>
          </div>
        </Row>
      </Container>
    </>
  );
};

const levelSelectName = (props) => {
  // return props.skill?.level <= 1 ? "Beginner" : "Expert";
  // return console.log(props.skill?.level);

  if (props.skill?.level <= 0) {
    return "No Skills";
  } else if (props.skill?.level >= 1 && props.skill.level <= 3) {
    return "Beginner";
  } else if (props.skill?.level >= 4 && props.skill.level <= 6) {
    return "Intermediate";
  } else if (props.skill?.level >= 7 && props.skill.level <= 8) {
    return "Proficient";
  } else if (props.skill?.level == 9) {
    return "Master";
  } else if (props.skill?.level == 10) {
    return "Expert";
  }
};

const levelSelectImage = (props) => {
  if (props.skill?.level <= 0) {
    return (
      <img
        src={noSkill}
        className="imageAssessment"
        alt="0 proficiency level"
      />
    );
  } else if (props.skill?.level >= 1 && props.skill.level <= 3) {
    return (
      <img
        src={beginner}
        className="imageAssessment"
        alt="Beginner Level Proficiency"
      />
    );
  } else if (props.skill?.level >= 4 && props.skill.level <= 6) {
    return (
      <img
        src={intermediate}
        className="imageAssessment"
        alt="Intermediate Level Proficiency"
      />
    );
  } else if (props.skill?.level >= 7 && props.skill.level <= 8) {
    return (
      <img
        src={proficient}
        className="imageAssessment"
        alt="Proficient Level Proficiency"
      />
    );
  } else if (props.skill?.level == 9) {
    return (
      <img
        src={master}
        className="imageAssessment"
        alt="Masters Level Proficiency"
      />
    );
  } else if (props.skill?.level == 10) {
    return (
      <img
        src={expert}
        className="imageAssessment"
        alt="Masters Level Proficiency"
      />
    );
  }
};
