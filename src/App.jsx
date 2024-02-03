import { useState } from "react";
import "./App.css";
import Button from "./chapter1/Button";
import Card from "./chapter1/Card";

function App() {
  return (
    <div>
      <Card title={"Card1"} />
      <Card title={"Card2"} />
      <Card title={"Card3"} />
      <Card title={"Card4"} />
    </div>
  );
}

export default App;
