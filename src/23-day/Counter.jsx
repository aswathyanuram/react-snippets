import React, { useState } from "react";

export default function Counter() {
  const [count, setCount] = useState(0);
  const addCount = () => {
    setCount(count + 1);
  };
  const subCount = () => {
    setCount(count - 1);
  };
  return (
    <div>
      <button onClick={addCount}>+</button>
      <div>{count}</div>
      <button onClick={subCount}>-</button>
    </div>
  );
}
