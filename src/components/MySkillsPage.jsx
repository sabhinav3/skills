import React, { Component, useState } from "react";
import styled from "styled-components";
import Navbar from "react-bootstrap/Navbar";
import Container from "react-bootstrap/Container";
import Row from "react-bootstrap/Row";
import Col from "react-bootstrap/Col";
import { Link, useLocation } from "react-router-dom";
import "/Users/sabhinav/nearbuzz/skills/src/index.css";
import "@fontsource/roboto";
import verified from "/Users/sabhinav/nearbuzz/skills/src/images/verified.png";
import pending from "/Users/sabhinav/nearbuzz/skills/src/images/pending.png";
import frame25 from "/Users/sabhinav/nearbuzz/skills/src/images/Frame-25.png";
import frame28 from "/Users/sabhinav/nearbuzz/skills/src/images/Frame-28.png";
import frame29 from "/Users/sabhinav/nearbuzz/skills/src/images/Frame-29.png";
import noAssessment from "/Users/sabhinav/nearbuzz/skills/src/images/no_assessment.png";
import edit from "/Users/sabhinav/nearbuzz/skills/src/images/edit.png";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { MarkExpertSkill } from "./MarkExpertSkill";
// import { ManageSkills } from "./ManageSkillsPage";
import { Details, SkillDetails } from "./SkillDetails";

// const navigateManageSkills = () => {
//   navigate("/src/components/ManageSkills.jsx");
// };

// const ManageSkillsPage = lazy(() => import("./ManageSkills"));

const Comp1 = styled.div`
  margin-left: 0px;
  display: inline-flex;
`;

const Comp2 = styled.div`
  //   margin-left: 440px;
  display: inline-flex;
`;

const CompInside = styled.div`
  margin-left: 10px;
  display: inline-flex;
`;

export const MySkillsPage = () => {
  const defaultSkills = [
    {
      id: 1,
      skillName: "JavaScript",
      isExpertSkill: false,
      expertStatus: null,
      isMarkedExpert: false,
      level: 2,
      proficiency: 60,
      experience: 1,
    },
    {
      id: 2,
      skillName: "React",
      isExpertSkill: false,
      expertStatus: null,
      isMarkedExpert: false,
      level: 1,
      proficiency: 70,
      experience: 1,
    },
  ];

  //access router state and mySkills array from the state

  const location = useLocation();
  const currentSkills = location.state?.mySkills
    ? location.state?.mySkills
    : defaultSkills;

  const [mySkills, setMySkills] = useState(currentSkills);

  console.log(mySkills);

  return (
    <>
      <Container>
        {mySkills.map((skill) => (
          <SkillDetails skill={skill} />
        ))}

        {/* <Button onClick={(e) => manageSkills(e)}> */}
        <div className="linkButton">
          <Link to="/manageSkills" state={{ mySkills: mySkills }}>
            <img src={edit} className="imageEdit" alt="profiency %" />
            Edit Skills
          </Link>
        </div>
        {/* </Button> */}
      </Container>
    </>
  );
};
