import React from "react";
import "./page.css";

export default function Sidebar({ titles, changeApp }) {
  return (
    <div className="sidebar">
      {titles.map((title) => {
        return (
          <div
            className="tab"
            onClick={() => {
              changeApp(title);
            }}
          >
            {title?.title}
          </div>
        );
      })}
    </div>
  );
}
