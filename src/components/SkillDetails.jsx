import React from "react";
import styled from "styled-components";
// import Container from "react-bootstrap/Container";
// import Row from "react-bootstrap/Row";
// import Col from "react-bootstrap/Col";
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
      <div className="detailsPending">
        <p>
          <b>{props.skill?.skillName}</b>
        </p>
        <img src={pending} className="imagePending" alt="verified" />
        <div className="assessmentsPending">
          <img src={frame15} className="imageAssessment" alt="profiency %" />
          <div>
            <b>{props.skill?.level}</b> Level with{" "}
            <b>{props.skill?.proficiency}</b> profiency,
            <br />
            <p>10 Assessments</p>
          </div>
        </div>
      </div>
      {!props.skill?.isMarkedExpert && (
        <div className="checkbox">
          <input type={"checkbox"}></input>
          <p className="textCheckbox">Mark this field as expert</p>
        </div>
      )}
    </>
  );
};
