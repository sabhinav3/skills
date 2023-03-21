import { useState } from "react";

function NumCounter() {
  let [num, setNum] = useState(0);
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

      <div className="col-xl-3">
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
            type="text"
            class="form-control"
            value={num}
            onChange={handleChange}
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

export default NumCounter;

// import React, { useState } from "react";

// function Counter() {
//   const [count, setCount] = useState(0);

//   function decrement() {
//     setCount((prevCount) => prevCount - 1);
//   }
//   function increment() {
//     setCount((prevCount) => prevCount + 1);
//   }

//   return (
//     <>
//       <button onClick={decrement}>-</button>
//       <span>count</span>
//       <button onClick={increment}>+</button>
//     </>
//   );
// }

// export default Counter;
