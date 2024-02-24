import React from "react";
import Sub from "./Sub";

export default function Card2({ title, sub }) {
  return (
    <div style={{ margin: "1rem", boxShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>
      <div>{title}</div>
      <Sub sub={sub} />
    </div>
  );
}
