import React, { useState } from "react";
import { Multiselect } from "multiselect-react-dropdown";
import SearchRoundedIcon from "@mui/icons-material/SearchRounded";

const data = [
  { Skill: "javascript", id: 1 },
  { Skill: "flutter", id: 2 },
  { Skill: "react", id: 3 },
  { Skill: "angular", id: 4 },
];

export const SearchBar = (props) => {
  const [options] = useState(data);

  return (
    <>
      <div className="cssSearchBar">
        <div>
          <Multiselect options={options} displayValue="Skill"></Multiselect>
        </div>
      </div>
    </>
  );
};
