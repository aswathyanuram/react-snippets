import React from "react";
import "./tabs.css";

export default function Sidebar({ alertValue }) {
  return (
    <div className="sidebar" onClick={alertValue}>
      Sidebar
    </div>
  );
}
