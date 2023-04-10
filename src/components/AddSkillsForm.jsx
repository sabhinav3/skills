import React, { useState } from "react";
import { Autocomplete } from "@material-ui/lab";
import { TextField, Button } from "@mui/material";

const skillsDB = [
  { skillName: "javascript", id: 1 },
  { skillName: "flutter", id: 2 },
  { skillName: "react", id: 3 },
  { skillName: "angular", id: 4 },
];

export const AddSkillsForm = (props) => {
  const [options] = useState(skillsDB);
  const [newSkills, setNewSkills] = useState([]);

  return (
    <>
      <div className="cssSearchBar">
        <div>
          <Autocomplete
            multiple
            id="tags-standard"
            options={skillsDB}
            getOptionLabel={(option) => option.skillName}
            renderInput={(params) => (
              <TextField
                {...params}
                variant="standard"
                label="add new skills"
                placeholder="add new skills"
              />
            )}
          />

          <div></div>
        </div>
      </div>
    </>
  );
};
