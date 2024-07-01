import React from "react";
import "./blogCard.css";

export default function BlogCard() {
  return (
    <div className="container">
      <div className="blogCard">
        <div className="header">
          <div className="image"></div>
          <button className="btn">Design</button>
        </div>
        <div className="content">
          <div className="title">Embracing Minimalism</div>
          <div className="details">
            From minimalist sculptures to minimalist paintings, this blog will
            inspire you to appreciate the beauty that lies in simplicity.
          </div>
        </div>

        <div className="footer">Annie Spratt</div>
      </div>
    </div>
  );
}
