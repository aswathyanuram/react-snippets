import React from "react";
import Fruits from "./Fruits";

export default function App() {
  const fruits = ["Banana", "Watermelon", "Orange", "Papaya"];

  return (
    <div>
      <Fruits fruits={fruits} />
    </div>
  );
}
