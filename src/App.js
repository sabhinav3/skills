import "./App.css";
import { ManageSkills, ManageSkillsPage } from "./components/ManageSkillsPage";
import { MySkills, MySkillsPage } from "./components/MySkillsPage";
import { Routes } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { LevelSelect } from "./components/SkillLevelSelect";
import { useState } from "react";
import { SkillName } from "./components/SkillName";
import { TempDetails } from "./components/TempSkillsDet";

function App() {
  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<MySkillsPage />} />
          <Route path="/manageSkills" element={<ManageSkillsPage />} />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
