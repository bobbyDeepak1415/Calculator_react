import React from "react";

function Calculator() {

 const  getValue=()=>{
  
 }

  return (
    <>
      <div className="w-[420px] bg-[rgb(168,168,168)] m-auto text-center p-[11px] mt-[55px]">
        <p className="h-[20px] text-2xl font-bold mb-2">Calculator</p>
        <div>
          <input
            placeholder="0"
            className="w-[80%] bg-white p-[11px] border-none text-[20px] mt-[11px] rounded-[3px]"
          ></input>
        </div>
        <button onClick={getValue} value="(">(</button>
        <button onClick={getValue} value=")">)</button>
        <button onClick={getValue} value="%">%</button>
        <button onClick={getValue} value="AC">AC</button>

        <button onClick={getValue} value="7">7</button>
        <button onClick={getValue} value="8">8</button>
        <button onClick={getValue} value="9">9</button>
        <button onClick={getValue} value="*">*</button>

        <button onClick={getValue} value="4">4</button>
        <button onClick={getValue} value="5">5</button>
        <button onClick={getValue} value="6">6</button>
        <button onClick={getValue} value="-">-</button>

        <button onClick={getValue} value="1">1</button>
        <button onClick={getValue} value="2">2</button>
        <button onClick={getValue} value="3">3</button>
        <button onClick={getValue} value="+">+</button>

        <button onClick={getValue} value="+">0</button>
        <button onClick={getValue} value="Back">Back</button>
        <button onClick={getValue} value="+">=</button>
        <button onClick={getValue} value="/">/</button>
      </div>
    </>
  );
}

export default Calculator;
