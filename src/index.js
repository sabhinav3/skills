import React from "react";
import ReactDOM from "react-dom/client";
import "./index.css";
import App from "./App";
import reportWebVitals from "./reportWebVitals";
import "@fontsource/roboto";
import "bootstrap/dist/css/bootstrap.css";
import "@fontsource/roboto";
import SkillForm from "./components/ManageSkillForm";
import ServiceForm from "./components/FormEg";
import SkillAssessmentForm from "./components/SkillAssessmentForm";

const root = ReactDOM.createRoot(document.getElementById("root"));
// root.render(<App />);
// root.render(<SkillForm />);
root.render(<SkillAssessmentForm />);
// root.render(<ServiceForm />);
// If you want to start measuring performance in your app, pass a function
// to log results (for example: reportWebVitals(console.log))
// or send to an analytics endpoint. Learn more: https://bit.ly/CRA-vitals
reportWebVitals();
