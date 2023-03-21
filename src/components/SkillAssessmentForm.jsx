import { TextField } from "@mui/material";
import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { Slider, SliderValue } from "./Slider";
import NumCounter from "./NumCounter";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";

function SkillAssessmentForm() {
  //   const [inputSkills, setInputSkills] = useState([
  //     {
  //       id: 0,
  //       skillName: "",
  //       isExpertSkill: false,
  //       level: "beginner",
  //       proficiency: 0,
  //       experience: 0,
  //     },
  //   ]);

  const [sliderLevel, setSliderLevel] = useState(10);

  const [experienceLevel, setExperienceLevel] = useState(1);

  const [skillName, setSkillName] = useState([
    {
      id: "",
      inputSkillField: "",
      isExpertSkill: "",
      level: "",
      proficiencyInput: "",
      experienceInput: "",
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
  return (
    <Container>
      <div className="SkillInputTextField">
        <Row>
          <form className="" onSubmit={handleSubmit} autoComplete="off">
            {skillName.map((skill, index) => (
              <div>
                {/* input of the skill name */}
                <Col>
                  <div key={index} className="marginSkillAssessmentDetails">
                    <TextField
                      name="inputSkillField"
                      label="Enter the Skill"
                      varient="filled"
                      value={skill.inputSkillField}
                      onChange={(event) => handleChangeInput(index, event)}
                    />
                  </div>
                </Col>
                {/* Slider input  */}
                <Col>
                  <div
                    key={index}
                    className="marginSkillAssessmentDetails"
                    autoComplete="off"
                  >
                    <SliderValue
                      sliderLevel={index}
                      onSliderValueSelect={(e) => setSliderLevel(e)}
                    />
                  </div>
                </Col>
                {/* input of the counter for the years of experience */}
                <Col>
                  <div
                    key={index}
                    className="marginSkillAssessmentDetails"
                    autoComplete="off"
                  >
                    <NumCounter
                      experienceLevel={index}
                      onExperienceValueSelct={(e) => setExperienceLevel(e)}
                    />
                    {/* <NumCounter experienceValue={() => setNum()} /> */}
                  </div>
                </Col>
              </div>
            ))}
          </form>
        </Row>
      </div>
    </Container>
  );
}

export default SkillAssessmentForm;
