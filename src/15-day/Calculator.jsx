import React, { useState } from "react";

export default function Calculator() {
  const [displayText, setDisplayText] = useState("");

  const updateText = (e) => {
    const value = e.target.innerText;
    setDisplayText((old) => old + String(value));
  };

  const clearOne = () => {
    setDisplayText((old) => old.slice(0, old.length - 1));
  };

  const clearAll = () => {
    setDisplayText("");
  };

  return (
    <div className="calc_container">
      <div className="calc_wrapper">
        <div className="calc_display">{displayText}</div>
        <div className="calc_buttons">
          <div className="calc_button_row">
            <div className="calc_button" onClick={updateText}>
              7
            </div>
            <div className="calc_button" onClick={updateText}>
              8
            </div>
            <div className="calc_button" onClick={updateText}>
              9
            </div>
          </div>
          <div className="calc_button_row">
            <div className="calc_button" onClick={updateText}>
              4
            </div>
            <div className="calc_button" onClick={updateText}>
              5
            </div>
            <div className="calc_button" onClick={updateText}>
              6
            </div>
          </div>
          <div className="calc_button_row">
            <div className="calc_button" onClick={updateText}>
              1
            </div>
            <div className="calc_button" onClick={updateText}>
              2
            </div>
            <div className="calc_button" onClick={updateText}>
              3
            </div>
          </div>
          <div className="calc_button_row">
            <div className="calc_button" onClick={updateText}>
              0
            </div>
            <div className="calc_button calc_accent" onClick={clearOne}>
              C
            </div>
            <div className="calc_button calc_accent" onClick={clearAll}>
              CE
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
