import React from "react";

export default function Data2({ data, setData }) {
  return (
    <div
      onClick={() => {
        setData("CLICKED 2");
      }}
    >
      {data}
    </div>
  );
}
