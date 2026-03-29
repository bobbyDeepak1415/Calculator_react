import React, { useCallback, useReducer, useState } from "react";
import Child from "./Child";
// import handleClick from "./handleClick";


let initialState={
    count:0
}


const reducer=(state,action)=>{

    

}

const Demo = () => {
  console.log("rendering parent...");

  const [count,dispatch] = useReducer(reducer,initialState);
//   const memoizedValue = useCallback(() => {
//     handleClick(setCount);
//   }, [setCount]);



  return (
    <div>
      <h1>Parent count at:{count}</h1>
      <button>+</button>
      <button onClick={()=>dispatch("increment")}>-</button>
      <button>reset</button>
      <Child />
    </div>
  );
};

export default Demo;
