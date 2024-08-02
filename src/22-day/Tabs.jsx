import React from "react";
import Sidebar from "./Sidebar";
import Content from "./Content";
import "./tabs.css";

export default function Tabs() {
  const alertValue = () => {
    alert("Hi");
  };
  return (
    <div className="container">
      <Sidebar alertValue={alertValue} />
      <Content />
    </div>
  );
}
