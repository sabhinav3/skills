import React, { useState } from "react";
import { Container } from "react-bootstrap";
import pending from "/Users/sabhinav/nearbuzz/skills/src/images/pending.png";
import verified from "/Users/sabhinav/nearbuzz/skills/src/images/verified.png";

export const MarkExpertSkill = (props) => {
  const [checked, setChecked] = useState(props.isMarkedExpert);
  return (
    <>
      <input
        type="checkbox"
        checked={checked}
        onChange={(e) => setChecked(!checked)}
      ></input>
      <label>Mark this skill as Expert</label>
    </>
  );
};
