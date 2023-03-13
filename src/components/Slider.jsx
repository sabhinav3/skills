import React, { useState } from "react";
import Slider from "@material-ui/core/Slider";
import Box from "@mui/material/Box";
import TextField from "@mui/material/TextField";

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

export const SliderValue = (props) => {
  const [proficiencyValue, setProficiencyValue] = useState(50);

  return (
    <>
      <div>
        <Box sx={{ width: 300 }}>
          <Slider
            color="#808080"
            className="slider"
            defaultValue={50}
            aria-label="Custom marks"
            valueLabelDisplay="on"
            marks={marks}
            onChangeCommitted={(_, v) => setProficiencyValue(v)}
          />
          <TextField
            className="sliderValue"
            label="Proficiency Value"
            value={proficiencyValue}
            size="small"
            readOnly
          />
        </Box>
      </div>
    </>
  );
};
