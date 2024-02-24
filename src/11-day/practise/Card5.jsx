import React from "react";
import Sub from "./Sub";

export default function Card5(props) {
  let title = props.title;
  let sub = props.sub;
  return (
    <div style={{ margin: "1rem", boxShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>
      <div>{title}</div>
      <Sub title={title} sub={sub} />
    </div>
  );
}
