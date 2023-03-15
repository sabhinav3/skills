import "./App.css";
import { ManageSkills } from "./components/ManageSkills";
import { TempDetails } from "./components/TempSkillsDet";
import { Routes } from "react-router-dom";
import { BrowserRouter, Route } from "react-router-dom";
import { LevelSelect } from "./components/LevelSelect";
import { useState } from "react";

function App() {
  const [selectedLevel, setSelectedLevel] = useState(1);

  console.log(selectedLevel);

  return (
    <div>
      <BrowserRouter>
        <Routes>
          <Route path="/" element={<TempDetails />} />
          <Route path="/manageSkills" element={<ManageSkills />} />
          <Route
            path="/select"
            element={
              <LevelSelect
                selectedLevel={selectedLevel}
                onLevelSelect={(level) => setSelectedLevel(level)}
              />
            }
          />
        </Routes>
      </BrowserRouter>
    </div>
  );
}

export default App;
