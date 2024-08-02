import React, { useState } from "react";
import "./page.css";
import Counter from "../23-day/Counter";
import Sidebar from "./Sidebar";
import Content from "./Content";
import Calculator from "../15-day/Calculator";
import Color from "../15-day/Color";

export default function Page() {
  const [selectedTitle, setSelectedTitle] = useState([]);

  const changeApp = (title) => {
    setSelectedTitle(title);
  };

  const titles = [
    { id: 1, title: "Tab 1", app: <Counter /> },
    { id: 2, title: "Tab 2", app: <Calculator /> },
    { id: 3, title: "Tab 3", app: <Color /> },
  ];
  return (
    <div className="container">
      <Sidebar titles={titles} changeApp={changeApp} />
      <Content selectedTitle={selectedTitle} />
    </div>
  );
}
