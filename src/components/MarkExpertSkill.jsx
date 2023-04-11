import React, { useState } from "react";

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
