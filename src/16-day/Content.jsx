import React from "react";
import "./card.css";
import { MdVideoCameraFront } from "react-icons/md";

export default function Content() {
  return (
    <div>
      <div className="content">
        <MdVideoCameraFront style={{ fontSize: "300px" }} />

        <div className="details">Description goes here</div>
      </div>
    </div>
  );
}
