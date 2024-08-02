import React from "react";
import "./page.css";

export default function Content({ selectedTitle }) {
  return <div className="content">{selectedTitle?.app}</div>;
}
