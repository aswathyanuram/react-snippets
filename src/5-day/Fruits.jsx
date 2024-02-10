import React from "react";
import Fruit from "./Fruit";

export default function Fruits(props) {
  return (
    <div>
      {props.fruits.map((fruit) => {
        return <Fruit fruit={fruit} />;
      })}
    </div>
  );
}
