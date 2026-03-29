import React, { useCallback, useReducer, useState } from "react";
import Child from "./Child";
// import handleClick from "./handleClick";

let initialState = {
  count: 0,
};

const reducer = (state, action) => {
  switch (action.type) {
    case "increment":
      return { count: state.count + 1 };

    case "decrement":
      return { count: state.count - 1 };

    case "reset":
      return { count: state.count };
    default:
      return state;
  }
};

const Demo = () => {
  console.log("rendering parent...");

  const [state, dispatch] = useReducer(reducer, initialState);
  //   const memoizedValue = useCallback(() => {
  //     handleClick(setCount);
  //   }, [setCount]);

  return (
    <div>
      <h1>Parent count at:{state.count}</h1>
      <button onClick={() => dispatch("decrement")}>-</button>
      <button onClick={() => dispatch("increment")}>+</button>
      <button onClick={() => dispatch("reset")}>reset</button>
      <Child />
    </div>
  );
};

export default Demo;
