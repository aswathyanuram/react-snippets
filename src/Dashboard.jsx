import React, { useState } from "react";
import "./dashboard.css";
import Sidebar from "./Sidebar";
import Content from "./Content";
import Chicken from "./1-day/Chicken";
import Button1 from "./2-day/App";
import Button2 from "./3-day/App";
import App1 from "./4-day/App";
import App2 from "./5-day/App";
import Fan from "./6-day/App";
import Counter from "./7-day/App";
import ProductCard from "./8-day/App";
import App3 from "./9-day/App";
import ImageGallery from "./10-day/App";
import Card from "./11-day/App";
import App4 from "./12-day/App";
import App5 from "./13-day/App";
import App6 from "./14-day/App";
import Calculator from "./15-day/App";
import UICard from "./16-day/App";

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
      component: <App1 />,
    },
    {
      id: 5,
      title: "Day5",
      component: <App2 />,
    },
    {
      id: 6,
      title: "Day6",
      component: <Fan />,
    },
    {
      id: 7,
      title: "Day7",
      component: <Counter />,
    },
    {
      id: 8,
      title: "Day8",
      component: <ProductCard />,
    },
    {
      id: 9,
      title: "Day9",
      component: <App3 />,
    },
    {
      id: 10,
      title: "Day10",
      component: <ImageGallery />,
    },
    {
      id: 11,
      title: "Day11",
      component: <Card />,
    },
    {
      id: 12,
      title: "Day12",
      component: <App4 />,
    },
    {
      id: 13,
      title: "Day13",
      component: <App5 />,
    },
    {
      id: 14,
      title: "Day14",
      component: <App6 />,
    },
    {
      id: 15,
      title: "Day15",
      component: <Calculator />,
    },
    {
      id: 16,
      title: "Day16",
      component: <UICard />,
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
