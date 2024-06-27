import React from "react";
import "./card.css";
import { MdVideoCameraFront } from "react-icons/md";

export default function Header() {
  return (
    <div>
      <div className="header">
        <MdVideoCameraFront
          style={{ fontSize: "2rem", borderRadius: "10px" }}
        />
        <div className="title">
          <div className="main">Title goes here</div>
          <div className="sub">Secondary Text</div>
        </div>
      </div>
    </div>
  );
}
