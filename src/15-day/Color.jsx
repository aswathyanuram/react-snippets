import React, { useState, useEffect } from "react";

export default function Color() {
  const COLORS = ["#151F30", "#103778", "#0593A2", "#FF7A48", "#E3371E"];

  const [currentColorIndex, setCurrentColorIndex] = useState(0);

  const style = {
    background: COLORS[currentColorIndex],
    display: "inline",
    padding: "1rem",
    color: "#FEFEFE",
    cursor: "pointer",
  };

  return (
    <div
      style={style}
      onClick={() => {
        if (currentColorIndex == COLORS?.length - 1) {
          setCurrentColorIndex(0);
        } else {
          setCurrentColorIndex((old) => old + 1);
        }
      }}
    >
      Color
    </div>
  );
}
