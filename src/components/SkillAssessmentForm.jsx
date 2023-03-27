import { TextField } from "@mui/material";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { SliderValue } from "./SkillProficiency";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import SkillExperience from "./SkillExperience";
import AddSkillsForm from "./AddSkillsForm";
import "/Users/sabhinav/nearbuzz/skills/src/index.css";
import { CheckBox } from "@material-ui/icons";
import { ExpertSkillCheckBox } from "./MarkExpertSkill";

export const SkillAssessmentForm = (skill) => {
  const [sliderLevel, setSliderLevel] = useState(10);

  // const [addSkills, setAddSkills] = useState(<SkillAssessmentForm />);

  const [experienceLevel, setExperienceLevel] = useState(1);

  const [skill, setSkill] = useState([
    {
      id: skill?.id,
      skillName: skill.skillName,
      level: skill.level,
      isExpertSkill: skill.isExpertSkill,
      isMarkedExpert: skill.isMarkedExpert,
      proficiency: skill.proficiency,
      experience: skill.experience,
    },
  ]);

  const skillLevel = (props) => {};

  const handleSubmit = (e) => {
    e.preventDefault();
    console.log("inputSkills", skillName);
  };

  const handleChangeInput = (index, event) => {
    console.log(index, event.target.name);
    const values = [...skillName];
    values[index][event.target.name] = event.target.value;
    setSkillName(values);
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
                  <div key={skill.id} className="marginSkillAssessmentDetails">
                    {skill.skillName}
                  </div>
                  <div>
                    <ExpertSkillCheckBox isExpertSkill={skill.isExpertSkill} />
                  </div>
                </Col>

                {/*The component to select the level of the skill is below*/}
                <Col>
                  <div className="marginSkillAssessmentDetails">
                    <SkillLevelSelect level={skill.level} />
                  </div>
                </Col>

                {/* Slider input  */}

                <Col>
                  <div
                    className="marginSkillAssessmentDetails"
                    autoComplete="off"
                  >
                    <SliderValue
                      proficiency={skill.proficiency}
                      id={skill.id}
                      onChange={setSliderLevel}
                    />
                  </div>
                </Col>
                {/* input of the counter for the years of experience */}
                <Col>
                  <div className="marginSkillAssessmentDetails">
                    <SkillExperience
                      experienceLevel={index}
                      experienceInput={skill.experienceInput}
                      onExperienceValueSelct={(e) => setExperienceLevel(e)}
                    />
                  </div>
                </Col>
              </div>
            )}
          </form>
          <AddSkillsForm />
        </Row>
      </div>
    </Container>
  );
};
