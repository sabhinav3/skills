import { useState } from "react";

function SkillExperience(props) {
  let [num, setNum] = useState(0);

  const experienceValue = (e) => {
    props.onExperienceValueSelect(e.target.id);
  };
  const index = props.index;

  let incNum = () => {
    if (num < 10) {
      setNum(Number(num) + 1);
    }
  };
  let decNum = () => {
    if (num > 0) {
      setNum(num - 1);
    }
  };
  let handleChange = (e) => {
    setNum(e.target.value);
  };

  return (
    <>
      <div className="selectExperience">Years of Experience</div>

      <div className="experienceCounter">
        <div class="input-group">
          <div class="input-group-prepend">
            <button
              class="btn btn-outline-primary"
              type="button"
              onClick={decNum}
            >
              -
            </button>
          </div>
          <input
            className="inputExperienceCounter"
            type="text"
            class="form-control"
            value={num}
            onChange={handleChange}
            disabled
          />
          <div class="input-group-prepend">
            <button
              class="btn btn-outline-primary"
              type="button"
              onClick={incNum}
            >
              +
            </button>
          </div>
        </div>
      </div>
    </>
  );
}

export default SkillExperience;
