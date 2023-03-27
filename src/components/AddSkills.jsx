import React, { useState } from "react";
import { Multiselect } from "multiselect-react-dropdown";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const skillsDB = [
  { skills: "javascript", id: 1 },
  { skills: "flutter", id: 2 },
  { skills: "react", id: 3 },
  { skills: "angular", id: 4 },
];

export const AddSkills = (props) => {
  const [options] = useState(skillsDB);

  return (
    <>
      <div className="cssSearchBar">
        <div>
          <Multiselect options={options} displayValue="Skill"></Multiselect>
          <></>
        </div>
      </div>
    </>
  );
};
