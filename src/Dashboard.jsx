import React, { useState } from "react";
import "./dashboard.css";
import Sidebar from "./Sidebar";
import Content from "./Content";
import Chicken from "./1-day/Chicken";
import Button1 from "./2-day/Button";
import Button2 from "./3-day/Button";

export default function Dashboard() {
  const days = [
    { id: 1, title: "Day1", component: <Chicken /> },
    {
      id: 2,
      title: "Day2",
      component: <Button1 title="Button" color="black" />,
    },
    {
      id: 3,
      title: "Day3",
      component: <Button2 title="Button" color="black" />,
    },
    {
      id: 4,
      title: "Day4",
      component: <Button2 title="Button" color="black" />,
    },
  ];

  const [currentDay, setCurrentDay] = useState(days[0]);

  const dayChanged = (id) => {
    let current = days.find((day) => day.id == id);
    setCurrentDay(current);
  };

  return (
    <div className="dashboard">
      <div className="dashboard_sidebar">
        <Sidebar days={days} currentDay={currentDay} dayChanged={dayChanged} />
      </div>
      <div className="dashboard_content">
        <Content currentDay={currentDay} />
      </div>
    </div>
  );
}
