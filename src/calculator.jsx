import React, { useState } from "react";

function Calculator() {
const [inputArray,setInputArray] = useState([])

const handleClick =(value) => {
    setInputArray([...inputArray,value])
}

const calculate=() => {
  setInputArray([eval(inputArray.join('')).toString()])
}

const clear = () => {
    setInputArray([])
}
const dell = () => {
    setInputArray([])
}


  return (
    <div>
      <div className="bg-zinc-900 h-screen w-full flex justify-center ">
        <div className="calculator mt-10 bg-[#7AB2B2] min-h-7 mb-10 p-10 rounded-lg">
          <div className="w-[320px] p-8 rounded-md outline-none bg-slate-600 text-white ">
            {inputArray.join("")}
          </div>

          <div className=" mt-10">
            <div className="flex justify-evenly p-2">
              <button
                className=" AC bg-[#FFA62F] font-bold p-2 rounded-full"
                onClick={clear}
              >
                AC
              </button>
              <button
                className=" DEL bg-[#FFA62F] font-bold p-2 rounded-full"
                onClick={dell}
              >
                DEL
              </button>
              <button
                className="bg-[#FFA62F] font-bold p-2 rounded-full"
                onClick={() => handleClick("%")}
              >
                %
              </button>
              <button
                className="bg-[#FFA62F] font-bold p-2 rounded-full opreater"
                onClick={() => handleClick("/")}
              >
                /
              </button>
            </div>
            <div className="flex justify-evenly p-2">
              <button
                className="bg-[#31363F] text-white p-3 rounded-full"
                onClick={() => handleClick(7)}
              >
                7
              </button>

              <button
                className="bg-[#31363F] text-white p-3 rounded-full"
                onClick={() => handleClick(8)}
              >
                8
              </button>
              <button
                className="bg-[#31363F] text-white p-3 rounded-full"
                onClick={() => handleClick(9)}
              >
                9
              </button>
              <button
                className="bg-[#31363F] text-white p-3 rounded-full opreater"
                onClick={() => handleClick("*")}
              >
                *
              </button>
            </div>
            <div className="flex justify-evenly p-2">
              <button
                className="bg-[#31363F] text-white p-3 rounded-full"
                onClick={() => handleClick(4)}
              >
                4
              </button>
              <button
                className="bg-[#31363F] text-white p-3 rounded-full"
                onClick={() => handleClick(5)}
              >
                5
              </button>
              <button
                className="bg-[#31363F] text-white p-3 rounded-full"
                onClick={() => handleClick(6)}
              >
                6
              </button>
              <button
                className="bg-[#31363F] text-white p-3 rounded-full opreater"
                onClick={() => handleClick("-")}
              >
                -
              </button>
            </div>
            <div className="flex justify-evenly p-2">
              <button
                className="bg-[#31363F] text-white p-3 rounded-full"
                onClick={() => handleClick(1)}
              >
                1
              </button>
              <button
                className="bg-[#31363F] text-white p-3 rounded-full"
                onClick={() => handleClick(2)}
              >
                2
              </button>
              <button
                className="bg-[#31363F] text-white p-3 rounded-full"
                onClick={() => handleClick(3)}
              >
                3
              </button>
              <button
                className="bg-[#31363F] text-white p-3 rounded-full opreater"
                onClick={() => handleClick("+")}
              >
                +
              </button>
            </div>

            <div className="flex justify-evenly p-2">
              <button
                className="bg-[#31363F] text-white p-3 rounded-full"
                onClick={() => handleClick("00")}
              >
                00
              </button>
              <button
                className="bg-[#31363F] text-white p-3 rounded-full"
                onClick={() => handleClick(0)}
              >
                0
              </button>
              <button
                className="bg-[#31363F] text-white p-3 rounded-full"
                onClick={() => handleClick(".")}
              >
                .
              </button>
              <button
                className="bg-[#31363F] text-white p-3 rounded-full opreater"
                onClick={calculate}
              >
                =
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Calculator;
