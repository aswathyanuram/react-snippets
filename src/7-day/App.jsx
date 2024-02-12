import React, { useState } from "react";
import Counter from "./Counter";
import Divider from "../1-day/Divider";
import Data1 from "./practise/Data1";
import Data2 from "./practise/Data2";

export default function App() {
  const [data1, setData1] = useState("Name1");
  const [data2, setData2] = useState("Name2");

  return (
    <div>
      <Counter />
      <Divider />
      <Data1 data={data1} setData={setData1} />
      <Data2 data={data2} setData={setData2} />
    </div>
  );
}
