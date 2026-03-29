import React, {  useReducer } from "react";
import Child from "./Child";
// import handleClick from "./handleClick";



const initialState={
    count:0
}

function reducerFunc(state,action){

}

const Demo=()=>{



    const [count,dispatch]=useReducer(reducerFunc,initialState)

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
