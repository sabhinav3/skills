import React from "react";
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

export const SliderValue = (props) => {
  return (
    <>
      <div>
        <Box sx={{ width: 300 }}>
          <Slider
            id={props.id}
            color="#808080"
            className="slider"
            defaultValue={props.proficiency}
            aria-label="Custom marks"
            valueLabelDisplay="on"
            marks={marks}
            onChangeCommitted={(_, v) => props.onChange()}
          />
        </Box>
      </div>
    </>
  );
};
