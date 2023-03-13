import React, { useState } from "react";
import { Level } from "./Level";

export const LevelSelect = (props) => {
  const toggleSelect = (e) => {
    props.onLevelSelect(e.target.id);
  };

  return (
    <div className="skillSelect">
      <div id="1" onClick={(e) => toggleSelect(e)}>
        <Level level={1} selected={props.selectedLevel == 1} />
      </div>
      <div id="2" onClick={(e) => toggleSelect(e)}>
        <Level level={2} selected={props.selectedLevel == 2} />
      </div>
      <div id="3" onClick={(e) => toggleSelect(e)}>
        <Level level={3} selected={props.selectedLevel == 3} />
      </div>
      <div id="4" onClick={(e) => toggleSelect(e)}>
        <Level level={4} selected={props.selectedLevel == 4} />
      </div>
      <div id="5" onClick={(e) => toggleSelect(e)}>
        <Level level={5} selected={props.selectedLevel == 5} />
      </div>
    </div>
  );
};
