import React from "react";
import verified from "/Users/sabhinav/nearbuzz/skills/src/images/verified.png";
import pending from "/Users/sabhinav/nearbuzz/skills/src/images/pending.png";
import App from "../App";

export const SkillName = (props) => {
  return (
    <div className="skillName">
      <p>UI/UX Designer</p>
      <p>
        {props.defaultSkills}
        <p>
          {props.isExpertSkill ? (
            <img src={verified} className="imageVerified" alt="verified" />
          ) : (
            <img src={pending} className="imageVerified" alt="verified" />
          )}
        </p>
      </p>
    </div>
  );
};
