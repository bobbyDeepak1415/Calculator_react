import React from "react";

function Calculator() {
  return (
    <>
      <div className="w-[420px] bg-[rgb(168,168,168)] m-auto text-center p-[11px] mt-[55px]">
        <div>
          <input
            placeholder="0"
            className="w-[80%] bg-white p-[11px] border-none text-[20px] mt-[11px] rounded-[3px]"
          ></input>
        </div>
        <button value="(">(</button>
        <button value=")">)</button>
        <button value="%">%</button>
        <button value="AC">AC</button>

        <button value="7">7</button>
        <button value="8">8</button>
        <button value="9">9</button>
        <button value="*">*</button>

        <button value="4">4</button>
        <button value="5">5</button>
        <button value="6">6</button>
        <button value="-">-</button>

        <button value="1">1</button>
        <button value="2">2</button>
        <button value="3">3</button>
        <button value="+">+</button>

        <button value="+">0</button>
        <button value="Back">Back</button>
        <button value="+">=</button>
        <button value="/">/</button>
      </div>
    </>
  );
}

export default Calculator;
