import React, { useState } from "react";
import { Container } from "react";
import SkillAssessmentForm from "./SkillAssessmentForm";

function AddSkillsForm(props) {
  const countValue = 2;
  const index = 2;

  const [addSkills, setAddSkills] = useState(<SkillAssessmentForm />);
  const handleAddSkills = () => console.log("print working");
  countValue > 0 && countValue < index + 1
    ? setAddSkills([...addSkills, <SkillAssessmentForm />])
    : console.log("minimun skills reached");

  return (
    <Container>
      <div>
        <button onClick={handleAddSkills()}></button>
      </div>
    </Container>
  );
}

export default AddSkillsForm;

// if id>0 && id > previous_id && id != previousId
// id (or) index
