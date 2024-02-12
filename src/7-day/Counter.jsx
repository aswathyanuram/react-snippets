import React, { useState } from "react";

export default function Counter() {
  const [value, setValue] = useState(0);
  const [threshold, setThreshold] = useState(1);

  const centerStyle = {
    display: "flex",
    alignItems: "center",
    justifyContent: "center",
  };

  return (
    <div>
      <div style={centerStyle}>
        <button
          onClick={() => {
            setValue((old) => old + threshold);
          }}
        >
          ADD
        </button>
      </div>
      <div style={{ textAlign: "center" }}>{value}</div>
      <div style={centerStyle}>
        <button
          onClick={() => {
            setValue((old) => old - threshold);
          }}
        >
          SUB
        </button>
      </div>
      <div style={centerStyle}>
        <input
          type="number"
          value={threshold}
          style={{
            marginTop: "1rem",
            textAlign: "center",
            transform: "translateX(5%)",
          }}
          onChange={(e) => {
            let value = e.target.value;
            setThreshold(Number(value));
          }}
        />
      </div>
    </div>
  );
}
