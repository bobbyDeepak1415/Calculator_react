import React, {  useReducer } from "react";
import Child from "./Child";
// import handleClick from "./handleClick";

const Demo=()=>{

    return (

        <>
        <h2>Demo count at:{}</h2>
        <button>-</button>
        <button>+</button>
        <button>reset</button>
        <Child/>
        </>
    )

}

export default Demo;
