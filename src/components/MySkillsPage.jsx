import React, { useState } from "react";
// import styled from "styled-components";
import Container from "react-bootstrap/Container";
import { Link, useLocation } from "react-router-dom";
import "/Users/sabhinav/nearbuzz/skills/src/index.css";
import "@fontsource/roboto";
import edit from "/Users/sabhinav/nearbuzz/skills/src/images/edit.png";
import "@fontsource/roboto/300.css";
import "@fontsource/roboto/400.css";
import "@fontsource/roboto/500.css";
import "@fontsource/roboto/700.css";
import { SkillDetails } from "./SkillDetails";

// const Comp1 = styled.div`
//   margin-left: 0px;
//   display: inline-flex;
// `;

// const Comp2 = styled.div`
//   //   margin-left: 440px;
//   display: inline-flex;
// `;

// const CompInside = styled.div`
//   margin-left: 10px;
//   display: inline-flex;
// `;

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
      level: 4,
      proficiency: 70,
      experience: 1,
    },
    {
      id: 3,
      skillName: "Flutter",
      isExpertSkill: false,
      expertStatus: null,
      isMarkedExpert: false,
      level: 9,
      proficiency: 91,
      experience: 3,
    },
    {
      id: 4,
      skillName: "UI/UX Designer",
      isExpertSkill: false,
      expertStatus: null,
      isMarkedExpert: false,
      level: 7,
      proficiency: 75,
      experience: 1,
    },
    {
      id: 5,
      skillName: "Angular",
      isExpertSkill: false,
      expertStatus: null,
      isMarkedExpert: false,
      level: 0,
      proficiency: 5,
      experience: 1,
    },
    {
      id: 6,
      skillName: "Machine Learning",
      isExpertSkill: false,
      expertStatus: null,
      isMarkedExpert: false,
      level: 10,
      proficiency: 90,
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
        <div className="navbar">
          <Link to="/" className="navbar">
            <p>My Skills</p>
          </Link>
        </div>

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
