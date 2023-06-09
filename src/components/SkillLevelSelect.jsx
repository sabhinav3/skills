import React, { useState } from "react";
import { Level } from "./Level";

// props.skillLevel

export const SkillLevelSelect = (props) => {
  const [selectedLevel, setSelectedLevel] = useState(props.level || 1);
  const toggleSelect = (e) => {
    setSelectedLevel(e.target.id);
  };

  return (
    <div className="skillSelect">
      <div id="1" onClick={(e) => toggleSelect(e)}>
        <Level level={1} selected={selectedLevel == 1} />
      </div>
      <div id="2" onClick={(e) => toggleSelect(e)}>
        <Level level={2} selected={selectedLevel == 2} />
      </div>
      <div id="3" onClick={(e) => toggleSelect(e)}>
        <Level level={3} selected={selectedLevel == 3} />
      </div>
      <div id="4" onClick={(e) => toggleSelect(e)}>
        <Level level={4} selected={selectedLevel == 4} />
      </div>
      <div id="5" onClick={(e) => toggleSelect(e)}>
        <Level level={5} selected={selectedLevel == 5} />
      </div>
    </div>
  );
};
