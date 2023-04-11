import React, { useState } from "react";
import { Container } from "react-bootstrap";
import { SkillProficiency } from "./SkillProficiency";
import { Row } from "react-bootstrap";
import { Col } from "react-bootstrap";
import SkillExperience from "./SkillExperience";
import "/Users/sabhinav/nearbuzz/skills/src/index.css";
import { MarkExpertSkill } from "./MarkExpertSkill";
import { SkillLevelSelect } from "./SkillLevelSelect";

export default function SkillAssessmentForm(props) {
  const [mySkill, setMySkill] = useState(props.skill);
  console.log(mySkill);

  return (
    <Container>
      <div className="SkillInputTextField">
        <Row>
          {mySkill && (
            <div>
              {/* input of the skill name */}

              <Col>
                <div className="marginSkillAssessmentDetails">
                  {mySkill.skillName}
                </div>

                {/*To check whether the skill is expert or not (checkbox)*/}

                <div>
                  <MarkExpertSkill isMarkedExpert={mySkill.isMarkedExpert} />
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
                <div className="marginSkillAssessmentDetails">
                  <SkillProficiency proficiency={mySkill.proficiency} />
                </div>
              </Col>
              {/* input of the counter for the years of experience */}
              <Col>
                <div className="marginSkillAssessmentDetails">
                  <SkillExperience experience={mySkill.experience} />
                </div>
              </Col>
            </div>
          )}
        </Row>
      </div>
    </Container>
  );
}
