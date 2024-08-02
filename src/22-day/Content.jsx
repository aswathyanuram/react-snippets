import React, { useEffect, useState } from "react";
import "./tabs.css";

export default function Content() {
  const [value, setValue] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setValue((old) => old + 1);
    }, 1000);

    return () => {
      clearInterval(interval);
    };
  }, []);
  return <div className="content">{value}</div>;
}
