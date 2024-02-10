import React from "react";
import Number from "./Number";

export default function Numbers(props) {
  return (
    <div
      style={{
        boxShadow: "2px 2px 4px rgba(0,0,0,0.5)",
        padding: "1rem",
        display: "inline-block",
      }}
    >
      {props.numbers.map((number) => {
        return <Number number={number} />;
      })}
    </div>
  );
}
