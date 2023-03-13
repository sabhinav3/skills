import React from "react";
import empty1 from "/Users/sabhinav/nearbuzz/skills/src/images/Frame-1.png";
import empty2 from "/Users/sabhinav/nearbuzz/skills/src/images/Frame-5.png";
import empty3 from "/Users/sabhinav/nearbuzz/skills/src/images/Frame-9.png";
import empty4 from "/Users/sabhinav/nearbuzz/skills/src/images/Frame-13.png";
import empty5 from "/Users/sabhinav/nearbuzz/skills/src/images/Frame-17.png";
import full1 from "/Users/sabhinav/nearbuzz/skills/src/images/Frame-3.png";
import full2 from "/Users/sabhinav/nearbuzz/skills/src/images/Frame-7.png";
import full3 from "/Users/sabhinav/nearbuzz/skills/src/images/Frame-11.png";
import full4 from "/Users/sabhinav/nearbuzz/skills/src/images/Frame-15.png";
import full5 from "/Users/sabhinav/nearbuzz/skills/src/images/Frame-19.png";

export const Level = (props) => {
  const level = props.level;
  const selected = props.selected;

  if (level === 1) {
    return selected ? (
      <img id="1" src={full1} className="levelIcons" alt="1st_level_full" />
    ) : (
      <img id="1" src={empty1} className="levelIcons" alt="1st_level_empty" />
    );
  } else if (level === 2) {
    return selected ? (
      <img id="2" src={full2} className="levelIcons" alt="2nd_level_full" />
    ) : (
      <img id="2" src={empty2} className="levelIcons" alt="2nd_level_empty" />
    );
  } else if (level === 3) {
    return selected ? (
      <img id="3" src={full3} className="levelIcons" alt="3rd_level_full" />
    ) : (
      <img id="3" src={empty3} className="levelIcons" alt="3rd_level_empty" />
    );
  } else if (level === 4) {
    return selected ? (
      <img id="4" src={full4} className="levelIcons" alt="4th_level_full" />
    ) : (
      <img id="4" src={empty4} className="levelIcons" alt="4th_level_empty" />
    );
  } else if (level === 5) {
    return selected ? (
      <img id="5" src={full5} className="levelIcons" alt="5th_level_full" />
    ) : (
      <img id="5" src={empty5} className="levelIcons" alt="5th_level_empty" />
    );
  }
};
