import React, { useState } from "react";

export default function App() {
  const clickHandler = () => {
    console.log("CLICKED2");
    window.open("https://www.w3schools.com");
  };

  const [text, setText] = useState("");

  return (
    <div>
      <div
        onClick={() => {
          console.log("CLICKED1");
        }}
      >
        TYPE 1
      </div>
      <div onClick={clickHandler}>TYPE 2</div>
      <input
        type="text"
        value={text}
        onChange={(e) => {
          let data = e.target.value;
          setText(data);
        }}
      />
    </div>
  );
}
