import React, { useState } from "react";

export default function Counter() {
  const [num, setNum] = useState(0);

  const add = () => {
    setNum(num + 1);
  };
  const sub = () => {
    setNum(num - 1);
  };

  return (
    <div>
      <button
        onClick={add}
        style={{ backgroundColor: "black", color: "white" }}
      >
        +
      </button>
      <div>{num}</div>
      <button
        onClick={sub}
        style={{ backgroundColor: "black", color: "white" }}
      >
        -
      </button>
    </div>
  );
}
