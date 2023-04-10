import React, { useState } from "react";
import Slider from "@material-ui/core/Slider";
import Box from "@mui/material/Box";
// import TextField from "@mui/material/TextField";

const marks = [
  {
    value: 0,
    label: "0%",
  },
  {
    value: 100,
    label: "100%",
  },
];

export const SkillProficiency = (props) => {
  const [proficiencyValue, setProficiencyValue] = useState(props.proficiency);
  return (
    <>
      <div>
        <Box sx={{ width: 300 }}>
          <Slider
            id={props.id}
            color="#808080"
            className="slider"
            // defaultValue={props.proficiency}
            defaultValue={proficiencyValue}
            aria-label="Custom marks"
            valueLabelDisplay="on"
            marks={marks}
            // onChangeCommitted={(_, v) => props.onChange()}
            // onChangeCommitted={(_, v) => setProficiencyValue(v)}
          />
        </Box>
      </div>
    </>
  );
};
