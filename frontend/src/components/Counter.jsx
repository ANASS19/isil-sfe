import React, { useState } from "react";

function Counter() {
  const [count, setCount] = useState(1);
  return (
    <div>
      <div className="counter flex items-center text-2xl justify-start">
      Qualité
        <div className="ml-5 shadow-md flex">
        <div className="bg-[#2825d8] text-white w-8 flex items-center justify-center rounded-l-lg cursor-pointer"
        onClick={() => setCount(count - 1)}>
          -
        </div>
        <div className="w-8 flex items-center justify-center border-[1px] border-[#8a4af3]">
        {count}
        </div>
        <div className="bg-[#2825d8] text-white w-8 flex items-center justify-center rounded-r-lg cursor-pointer"
        onClick={() => setCount(count + 1)}>
          +
        </div>
        </div>
      </div>
    </div>
  );
}

export default Counter;