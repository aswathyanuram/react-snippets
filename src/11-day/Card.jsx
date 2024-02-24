import React from "react";
import Profile from "./Profile";

export default function Card({ title, profileName = "NA" }) {
  let title = props.title;
  return (
    <div
      style={{
        padding: "1rem",
        boxShadow: "2px 2px 4px rgba(0,0,0,0.5)",
        marginBottom: "1rem",
      }}
    >
      <div>{title}</div>
      <Profile {...props} />
    </div>
  );
}
