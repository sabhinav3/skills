import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { SliderValue } from "./SkillProficiency";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import SkillExperience from "./SkillExperience";
import AddSkillsForm from "./AddSkillsForm";
import "/Users/sabhinav/nearbuzz/skills/src/index.css";
import { MarkExpertSkill } from "./MarkExpertSkill";
import { SkillLevelSelect } from "./SkillLevelSelect";

export default function SkillAssessmentForm(skill) {
  const [sliderLevel, setSliderLevel] = useState(10);

  // const [addSkills, setAddSkills] = useState(<SkillAssessmentForm />);

  const [experienceLevel, setExperienceLevel] = useState(1);

  const [mySkill, setMySkill] = useState([
    {
      id: mySkill?.id,
      skillName: mySkill.skillName,
      level: mySkill.level,
      isExpertSkill: mySkill.isExpertSkill,
      isMarkedExpert: mySkill.isMarkedExpert,
      proficiency: mySkill.proficiency,
      experience: mySkill.experience,
    },
  ]);

  const skillLevel = (props) => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("inputSkills", mySkill.skillName);
  };

  const handleChangeInput = (index, event) => {
    console.log(index, event.target.name);
    const values = [...mySkill.skillName];
    values[index][event.target.name] = event.target.value;
    setMySkill(values);
  };

  const displaySkillAssessmentForm = () => {
    this.setState({
      displaySkillAssessmentForm: !this.state.displaySkillAssessmentForm,
    });
  };

  return (
    <Container>
      <div className="SkillInputTextField">
        <Row>
          <form className="" onSubmit={handleSubmit} autoComplete="off">
            {skill && (
              <div>
                {/* input of the skill name */}

                <Col>
                  <div className="marginSkillAssessmentDetails">
                    {mySkill.skillName}
                  </div>

                  {/*To check whether the skill is expert or not (checkbox)*/}

                  <div>
                    <MarkExpertSkill isExpertSkill={mySkill.isExpertSkill} />
                  </div>
                </Col>

                {/*The component to select the level of the skill is below*/}
                <Col>
                  <div className="marginSkillAssessmentDetails">
                    <SkillLevelSelect level={mySkill.level} />
                  </div>
                </Col>

                {/* Proficiency input : Slider */}

                <Col>
                  <div
                    className="marginSkillAssessmentDetails"
                    autoComplete="off"
                  >
                    <SliderValue
                      proficiency={mySkill.proficiency}
                      id={mySkill.id}
                      onChange={setSliderLevel}
                    />
                  </div>
                </Col>
                {/* input of the counter for the years of experience */}
                <Col>
                  <div className="marginSkillAssessmentDetails">
                    <SkillExperience
                      experienceLevel={mySkill.index}
                      experienceInput={mySkill.experienceInput}
                      onExperienceValueSelct={(e) => setExperienceLevel(e)}
                    />
                  </div>
                </Col>
              </div>
            )}
          </form>
          <AddSkillsForm skillName={mySkill.skillNames} />
        </Row>
      </div>
    </Container>
  );
}
