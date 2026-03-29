import React, { useMemo, useState } from "react";
import Child from "./Child";
import handleClick from "./handleClick";

const Demo = () => {
  console.log("rendering parent...");

  let num = 9;

  const memoizedValue = useMemo(() => {
    console.log("expensive func called");
    return num * 1000;
  }, [num]);

  const [count, setCount] = useState(0);
  return (
    <div>
      <h1>Parent count at:{count}</h1>
      <h2>expensive operation result:{memoizedValue}</h2>
      <button onClick={() => handleClick(setCount)}>click</button>
      {/* <button>+</button> */}
      <Child />
    </div>
  );
};

export default Demo;
