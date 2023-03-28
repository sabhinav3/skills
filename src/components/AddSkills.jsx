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

// <Multiselect
//   displayValue="key"
//   onKeyPressFn={function noRefCheck(){}}
//   onRemove={function noRefCheck(){}}
//   onSearch={function noRefCheck(){}}
//   onSelect={function noRefCheck(){}}
//   options={[
//     {
//       cat: 'Group 1',
//       key: 'Option 0 is extremely long and therefore should probably be shortened once selected as a value'
//     },
//     {
//       cat: 'Group 1',
//       key: 'Option 1'
//     },
//     {
//       cat: 'Group 1',
//       key: 'Option 2'
//     },
//     {
//       cat: 'Group 1',
//       key: 'Option 3'
//     },
//     {
//       cat: 'Group 2',
//       key: 'Option 4'
//     },
//     {
//       cat: 'Group 2',
//       key: 'Option 5'
//     },
//     {
//       cat: 'Group 2',
//       key: 'Option 6'
//     },
//     {
//       cat: 'Group 2',
//       key: 'Option 7'
//     }
//   ]}
//   selectedValueDecorator={function noRefCheck(){}}
// />
