import React from "react";

export default function Data1({ data, setData }) {
  return (
    <div
      onClick={() => {
        setData("CLICKED 1");
      }}
    >
      {data}
    </div>
  );
}
