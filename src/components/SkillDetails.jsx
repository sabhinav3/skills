import React from "react";
import styled from "styled-components";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import Navbar from "react-bootstrap/Navbar";
import { Link } from "react-router-dom";
import "@fontsource/roboto";
import "/Users/sabhinav/nearbuzz/skills/src/index.css";
import verified from "/Users/sabhinav/nearbuzz/skills/src/images/verified.png";
import pending from "/Users/sabhinav/nearbuzz/skills/src/images/pending.png";
import frame15 from "/Users/sabhinav/nearbuzz/skills/src/images/Frame-15.png";

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
          {/* <Col> */}
          <div className="mySkillsPage">
            <div className="mySkillName">
              <b>{props.skill?.skillName}</b>
            </div>

            {/* </Col> */}
            <div className="mySkillLevelImage">
              <img
                src={frame15}
                className="imageAssessment"
                alt="profiency %"
              />
              {/* <b>{props.skill?.level}</b> Level with */}
              <b>{levelSelectName(props)}</b>Level with
              <b>{props.skill?.proficiency}</b>% Profiency,
            </div>
            <br />
            <div className="mySkillProficiency">
              <p>10 Assessments</p>
            </div>
          </div>
        </Row>

        {!props.skill?.isMarkedExpert && (
          <div className="checkbox">
            <input type={"checkbox"}></input>
            <p className="textCheckbox">Mark this field as expert</p>
          </div>
        )}
      </Container>
    </>
  );
};

const levelSelectName = (props) => {
  // return props.skill?.level <= 1 ? "Beginner" : "Expert";
  // return console.log(props.skill?.level);

  if (props.skill?.level >= 1 && props.skill.level <= 3) {
    return "Beginner";
  } else if (props.skill?.level >= 4 && props.skill.level <= 6) {
    return "Intermediate";
  } else if (props.skill?.level >= 7 && props.skill.level <= 9) {
    return "Proficient";
  } else if (props.skill?.level == 10) {
    return "Master";
  }
};
