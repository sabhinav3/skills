import React, { useState } from "react";
import { Container } from "react";
import SkillAssessmentForm from "./SkillAssessmentForm";

function AddSkillsForm() {
  //   const sets = [];
  //   for (let i = 0; i < this.state.addSetsCounter; i++) {
  //     sets.push(<AddSets key="AddSets-{i}" />);
  //   }

  const [addSkills, setAddSkills] = useState(<SkillAssessmentForm id="0" />);

  const handleAddSkills = () => {
    setAddSkills([...addSkills, <SkillAssessmentForm />]);
  };

  return (
    <Container>
      <div>
        <button onClick={<SkillAssessmentForm />}></button>
      </div>
      <div>
        <button onClick={() => {}}></button>
      </div>
    </Container>
  );
}

export default AddSkillsForm;
