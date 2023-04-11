import React, { useState } from "react";
import Container from "react-bootstrap/Container";
import "/Users/sabhinav/nearbuzz/skills/src/index.css";
import "@fontsource/roboto";
import { useLocation } from "react-router-dom";
import ManageSkillForm from "./ManageSkillForm";

export const ManageSkillsPage = (props) => {
  // const [selectedLevel, setSelectedLevel] = useState(1);

  //access router state and mySkills array from the state

  const location = useLocation();
  const skills = location.state?.mySkills || [];

  const [mySkills, setMySkills] = useState(skills);
  console.log(mySkills);

  return (
    <Container>
      {/* 
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
      */}
      <ManageSkillForm mySkills={mySkills} onSkillsChange={setMySkills} />
    </Container>
  );
};
