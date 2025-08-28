import React, { useState } from "react";

function Calculator() {
  const [data, setData] = useState("");

  const getValue = (e) => {
    setData(data.concat(e.target.value));
  };

  const calculation = () => {
    setData(eval(data).toString());
  };

  const clearLast = () => {
    setData(data.slice(0, -1));
  };

  const clearAll = () => {
    setData("");
  };

  return (
    <>
      <div className="w-[500px] h-[550px] bg-blue-300 m-auto text-center p-[11px] mt-[55px]">
        <p className="h-[20px] text-2xl font-bold mb-2">Calculator</p>
        <div>
          <input
            value={data}
            placeholder="0"
            className="w-[80%] mb-5 bg-white p-[11px] border-none text-[20px] mt-[11px] rounded-[3px]"
          ></input>
        </div>
        <div>
          <button onClick={getValue} value="(">
            (
          </button>
          <button onClick={getValue} value=")">
            )
          </button>
          <button onClick={getValue} value="%">
            %
          </button>
          <button onClick={clearAll}>AC</button>

          <button onClick={getValue} value="7">
            7
          </button>
          <button onClick={getValue} value="8">
            8
          </button>
          <button onClick={getValue} value="9">
            9
          </button>
          <button onClick={getValue} value="*">
            *
          </button>

          <button onClick={getValue} value="4">
            4
          </button>
          <button onClick={getValue} value="5">
            5
          </button>
          <button onClick={getValue} value="6">
            6
          </button>
          <button onClick={getValue} value="-">
            -
          </button>

          <button onClick={getValue} value="1">
            1
          </button>
          <button onClick={getValue} value="2">
            2
          </button>
          <button onClick={getValue} value="3">
            3
          </button>
          <button onClick={getValue} value="+">
            +
          </button>

          <button onClick={getValue} value="+">
            0
          </button>
          <button onClick={clearLast}>Back</button>
          <button onClick={calculation}>=</button>
          <button onClick={getValue} value="/">
            /
          </button>
        </div>
      </div>
    </>
  );
}

export default Calculator;
