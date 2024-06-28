import React from "react";
import "./card.css";
import Button from "./Button";
import { FaHeart } from "react-icons/fa6";
import { IoMdShare } from "react-icons/io";

export default function Footer() {
  return (
    <div className="footer">
      <div className="footer_actions">
        <Button title={"ACTION 1"} className="clickable hoverable" />
        <Button title={"ACTION 2"} className="clickable hoverable" />
      </div>

      <div className="footer_icons">
        <FaHeart style={{ marginRight: "10px" }} className="clickable" />
        <IoMdShare style={{ marginRight: "10px", cursor: "pointer" }} />
      </div>
    </div>
  );
}
