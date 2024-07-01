import React from "react";
import "./businessCard.css";
import Content from "./Content";
import Footer from "./Footer";

export default function BusinessCard() {
  return (
    <div className="outer">
      <div className="b_card">
        <div className="bgImage">{/* <div className="overlay"></div> */}</div>
        <Content />
        <Footer />
      </div>
    </div>
  );
}
