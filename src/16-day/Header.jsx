import React from "react";
import "./card.css";
import { MdPerson } from "react-icons/md";

export default function Header() {
  return (
    <div>
      <div className="header">
        <div className="iconStyle">
          <MdPerson />
        </div>
        <div className="title">
          <div className="main">Title goes here</div>
          <div className="sub">Secondary Text</div>
        </div>
      </div>
    </div>
  );
}
