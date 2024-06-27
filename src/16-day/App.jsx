import React from "react";
import "./card.css";

import Footer from "./Footer";
import Header from "./Header";
import Content from "./Content";

export default function App(props) {
  return (
    <div className="container">
      <div className="card">
        <Header />
        <Content />
        <Footer />
      </div>
    </div>
  );
}
