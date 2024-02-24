import React from "react";
import Sub from "./Sub";

export default function Card1(props) {
  return (
    <div style={{ margin: "1rem", boxShadow: "2px 2px 4px rgba(0,0,0,0.5)" }}>
      <div>{props.title}</div>
      <Sub sub={props.sub} />
    </div>
  );
}
