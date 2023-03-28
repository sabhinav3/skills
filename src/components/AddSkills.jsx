import React, { useState } from "react";
import { Multiselect } from "multiselect-react-dropdown";
// import SearchRoundedIcon from "@mui/icons-material/SearchRounded";
import App from "../App";

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
          <Multiselect
            onKeyPressFn={function noRefCheck() {}}
            onRemove={function noRefCheck() {}}
            onSearch={function noRefCheck() {}}
            onSelect={function noRefCheck() {}}
            options={options}
            displayValue="skills"

            // selectedValueDecorator={function noRefCheck() {}}
          ></Multiselect>
          <></>
        </div>
      </div>
    </>
  );
};
