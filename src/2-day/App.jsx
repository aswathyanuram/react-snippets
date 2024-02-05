import React from "react";
import Button from "./Button";

export default function App() {
  let titles = ["Click me", "Submit", "Validate", "OK", "Open"];

  const generateRandomColor = () => {
    let red = Math.floor(Math.random() * 255);
    let green = Math.floor(Math.random() * 255);
    let blue = Math.floor(Math.random() * 255);
    let color = `rgb(${red},${green},${blue})`;
    return color;
  };

  return (
    <div>
      {/* <Button title={titles[0]} color={generateRandomColor()} /> */}
      {titles.map((title) => {
        return <Button title={title} color={generateRandomColor()} />;
      })}
    </div>
  );
}
