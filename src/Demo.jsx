import React, { useState } from "react";
import Child from "./Child";
import handleClick from "./handleClick";

const Demo = () => {
  console.log("rendering parent...");



  const [count,setCount]=useState(0)
  return (
    <div>
      <h1>Parent count at:{count}</h1>
      <button onClick={()=>handleClick(setCount)}>click</button>
      {/* <button>+</button> */}
      <Child />
    </div>
  );
};

export default Demo;
