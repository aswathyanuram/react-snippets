import React from "react";
import Numbers from "./Numbers";

export default function App() {
  const numbers = [1, 2, 3, 4, 5];
  return (
    <div>
      <Numbers numbers={[1, 2]} />
      <Numbers numbers={[1, 2, 3]} />
      <Numbers numbers={[8, 9]} />
      <Numbers numbers={[1001, 1002]} />
    </div>
  );
}
