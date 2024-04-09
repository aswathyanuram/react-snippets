import React, { useState } from "react";

export default function Calculator() {
  const [displayText, setDisplayText] = useState("");
  const [isError, setIsError] = useState(false);

  const updateText = (e) => {
    setIsError(false);
    const value = e.target.innerText;
    if (!isNaN(Number(value))) {
      setDisplayText((old) => old + String(value));
    } else if (
      displayText[displayText?.length - 1] != "x" &&
      displayText[displayText?.length - 1] != "+" &&
      displayText[displayText?.length - 1] != "-" &&
      displayText[displayText?.length - 1] != "/"
    ) {
      setDisplayText((old) => old + String(value));
    }
  };

  const clearOne = () => {
    setDisplayText((old) => old.slice(0, old.length - 1));
  };

  const clearAll = () => {
    setDisplayText("");
  };

  const calculate = () => {
    setIsError(false);
    let updatedText = displayText.replace(/x/g, "*");
    try {
      let result = eval(updatedText);
      setDisplayText(result);
      if (!isNaN(Number(result))) {
        setDisplayText(result);
      }
    } catch (error) {
      setIsError(true);
    }
  };

  return (
    <div className="calc_container">
      <div className="calc_wrapper">
        <div className={isError ? "calc_display_error" : "calc_display"}>
          {displayText}
        </div>
        <div className="calc_buttons">
          <div className="calc_button_row">
            <div className="calc_button" onClick={updateText}>
              +
            </div>
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
              -
            </div>
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
              x
            </div>
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
              /
            </div>
            <div className="calc_button" onClick={updateText}>
              0
            </div>
            <div className="calc_button calc_accent" onClick={calculate}>
              =
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
