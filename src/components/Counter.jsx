import React, { useState,useEffect } from "react";
function Counter() {
  const [count, setCount] = useState(0);
  useEffect(() => {
    console.log("Count updated:", count);
    }, [count]);
  function increment() {
      setCount(count + 1*5);

  }

  function decrement() {
   
      setCount(count - 1*5);
    
   }

  function reset() {
    setCount(0);
  }
 
  return (
    <div className="flex min-h-screen flex-col items-center justify-center bg-gray-100 font-sans">
      <div className="w-full max-w-sm rounded-2xl bg-white p-8 shadow-xl text-center">
        <h2 className="text-sm font-semibold uppercase tracking-wider text-gray-400">
          React Counter
        </h2>
        
        {/* Dynamic text color based on limits */}
        <h1 className={`my-6 text-6xl font-extrabold transition-all duration-300 ${
          count === 0 || count === 20 ? "text-red-500 scale-110" : "text-gray-800"
        }`}>
          {count}
        </h1>

        <div className="flex flex-col gap-3">
          <div className="flex gap-4">
            <button
              onClick={decrement}
              disabled={count === 0}
              className="flex-1 rounded-xl bg-amber-500 px-6 py-3 font-medium text-white shadow-md transition-all hover:bg-amber-600 active:scale-95 disabled:pointer-events-none disabled:opacity-40"
            >
              Decrement
            </button>
            <button
              onClick={increment}
             
              className="flex-1 rounded-xl bg-emerald-500 px-6 py-3 font-medium text-white shadow-md transition-all hover:bg-emerald-600 active:scale-95 disabled:pointer-events-none disabled:opacity-40"
            >
              Increment
            </button>
          </div>
          
          <button
            onClick={reset}
            className="w-full rounded-xl bg-gray-200 px-6 py-2.5 font-medium text-gray-700 transition-all hover:bg-gray-300 active:scale-95"
          >
            Reset
          </button>
        </div>
        
        {/* Optional helper text */}
        <p className="mt-4 text-xs text-gray-400">
          Value limited between 0 and 20
        </p>
      </div>
    </div>
  );
} 


export default Counter;