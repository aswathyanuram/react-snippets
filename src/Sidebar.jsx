import React from "react";
import "./dashboard.css";

export default function Sidebar({ days, dayChanged, currentDay }) {
  return (
    <div style={{ width: "100%" }}>
      {days.map((day) => {
        return (
          <div
            className={
              day.id == currentDay.id ? "sidebar_item_selected" : "sidebar_item"
            }
            onClick={() => {
              dayChanged(day.id);
            }}
          >
            {day?.title ?? "Day"}
          </div>
        );
      })}
    </div>
  );
}
