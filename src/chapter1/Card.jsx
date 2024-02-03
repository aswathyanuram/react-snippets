import React from "react";

export default function Card(props) {
  const cardStyle = {
    width: "300px",
    padding: "1rem",
    boxShadow: "2px 2px 4px rgba(0,0,0,0.4)",
  };
  return <div style={cardStyle}>{props.title}</div>;
}
