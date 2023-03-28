import "./App.css";
import { ManageSkills } from "./components/ManageSkills";
import { TempDetails } from "./components/TempSkillsDet";
import { Routes } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { LevelSelect } from "./components/SkillLevelSelect";
import { useState } from "react";
import { SkillName } from "./components/SkillName";

function App(props) {
  const defaultSkills = [
    {
      id: 1,
      skillName: "JavaScript",
      isExpertSkill: false,
      isMarkedExpert: false,
      level: 2,
      proficiency: 60,
      experience: 1,
    },
    {
      id: 2,
      skillName: "React",
      isExpertSkill: false,
      isMarkedExpert: false,
      level: 1,
      proficiency: 70,
      experience: 1,
    },
  ];

  const [mySkills, setMySkills] = useState(defaultSkills);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TempDetails mySkills={props.mySkills} />} />
          <Route
            path="/manageSkills"
            element={<ManageSkills onSkillsChange={setMySkills} />}
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
