import React, { useState } from "react";
import { Container } from "react-bootstrap";
import pending from "/Users/sabhinav/nearbuzz/skills/src/images/pending.png";
import verified from "/Users/sabhinav/nearbuzz/skills/src/images/verified.png";

export const MarkExpertSkill = (props) => {
  return (
    <>
      <input
        type="checkbox"
        checked={props.isMarkedExpert}
        onChange={(e) => props.handleMarkExpert(e.target.value)}
      ></input>
      <label>Mark this skill as Expert</label>
    </>
  );
};
