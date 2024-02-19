import React, { useState } from "react";

export default function App() {
  const [num, setnum] = useState(0);
  const [modifier, setModifier] = useState(6);
  const add = () => {
    setnum((old) => {
      return old + modifier;
    });
  };

  const sub = () => {
    setnum((old) => {
      return old - modifier;
    });
  };

  return (
    <div>
      <input
        type="number"
        min={1}
        value={modifier}
        onChange={(e) => {
          const value = e.target.value;
          setModifier(Number(value));
        }}
      />
      <br></br>
      <button
        onClick={() => {
          add();
        }}
      >
        {" "}
        ADD{" "}
      </button>
      <div>{num}</div>
      <button
        onClick={() => {
          sub();
        }}
      >
        {" "}
        SUB{" "}
      </button>
    </div>
  );
}
