import React from "react";
import remove from "/Users/sabhinav/nearbuzz/skills/src/images/remove.png";

export const SkillName = (props) => {
  return (
    <div className="skillName">
      <p>
        <div className="skillNameImage">
          <img src={remove} className="skillNameImage" alt="verified" />
        </div>
        {props.nameOfSkill}
        <input type={"checkbox"} className="checkbox"></input>
        <div className="expertSkillBox">Mark this as Expert skill</div>
      </p>
    </div>
  );
};
