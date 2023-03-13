import React from "react";
import Container from "react-bootstrap/Container";
import Navbar from "react-bootstrap/Navbar";
import "./index.css";
import "bootstrap/dist/css/bootstrap.css";
import { Details } from "./components/SkillDetails";
import { TempDetails } from "./components/TempSkillsDet";
import "@fontsource/roboto";
import { ManageSkills } from "./components/ManageSkills";
import { SearchBar } from "./components/SearchBar";
import {
  BrowserRouter,
  Switch,
  Route,
  Redirect,
  Routes,
} from "react-router-dom";
import SkillForm from "./components/SkillForm";
export const Skills = (props) => {
  return (
    <>
      <div>
        {/* <TempDetails /> */}
        {/* <ManageSkills /> */}
        <SkillForm />
      </div>

      {/* <div>
        <Routes>
          <Route
            path="/src/components/TempSkillsDet.jsx"
            element={<TempDetails />}
          ></Route>
          <Route path="/src/components/ManageSkills.jsx">
            <ManageSkills />
          </Route>
        </Routes>
      </div> */}
    </>
  );
};
