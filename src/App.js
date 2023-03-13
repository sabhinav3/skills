// import logo from "./logo.svg";
import "./App.css";
import { ManageSkills } from "./components/ManageSkills";
import { TempDetails } from "./components/TempSkillsDet";
import { Skills } from "./MySkills";
import link, { Link, Routes } from "react-router-dom";
import { BrowserRouter, Switch, Route, Redirect } from "react-router-dom";
import { LevelSelect } from "./components/LevelSelect";
import { useState } from "react";

// The routing which i'm performing here is not considered beacause the main file is
//  the MySkills.jsx file . Once try & edit in that file.
// We're also rendering the main performing app ( or component in the MySkills.jsx file )

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

    // <BrowserRouter>
    //   <Routes>
    //     <Route path="/" element={<TempDetails />} />
    //     <Route path="manageSkills" element={<ManageSkills />} />
    //   </Routes>
    // </BrowserRouter>
  );
}

export default App;
