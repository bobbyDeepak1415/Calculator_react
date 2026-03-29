import React, { useReducer } from "react";
import Child from "./Child";
// import handleClick from "./handleClick";

const initialState = {
  count: 0,
};

function reducerFunc(state, action) {
  switch (action.type) {
    case "decrement":
      return { count: state.count - 1 };
    case "increment":
      return { count: state.count + 1 };
    case "reset":
      return { count: 0 };
  }
}

const Demo = () => {
  console.log("demo rendering...");

  const [state, dispatch] = useReducer(reducerFunc, initialState);

  return (
    <>
      <h2>Demo count at:{state.count}</h2>
      <button onClick={() => dispatch({ type: "decrement" })}>-</button>
      <button onClick={() => dispatch({ type: "increment" })}>+</button>
      <button onClick={() => dispatch({ type: "reset" })}>reset</button>
      <Child />
    </>
  );
};

export default Demo;
