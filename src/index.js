import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "@fontsource/roboto";
import "bootstrap/dist/css/bootstrap.css";
import "@fontsource/roboto";
import ManageSkillForm from "./components/ManageSkillForm";
import SkillAssessmentForm from "./components/SkillAssessmentForm";
import AddSkillsForm from "./components/AddSkillsForm";

const root = ReactDOM.createRoot(document.getElementById("root"));
root.render(<App />);
// root.render(<SkillForm />);
// root.render(<SkillAssessmentForm />);

reportWebVitals();
