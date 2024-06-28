import React from "react";

export default function Button({ title, className }) {
  return (
    <div style={{ color: "blue", paddingRight: "1rem" }} className={className}>
      {title}
    </div>
  );
}
