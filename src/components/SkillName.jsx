import React from "react";
import verified from "/Users/sabhinav/nearbuzz/skills/src/images/verified.png";
import pending from "/Users/sabhinav/nearbuzz/skills/src/images/pending.png";

export const SkillName = (props) => {
  return (
    <div className="skillName">
      <p>
        {props.skillName}
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
