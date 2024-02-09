import React from "react";
import Users from "./Users";

export default function App() {
  return (
    <>
      <Users users={[1]} />
      <Users users={[1, 2]} />
      <Users users={[1, 2, 3]} />
      <Users users={[1, 2, 3, 4]} />
      <Users users={[1, 2, 3, 4, 5]} />
    </>
  );
}
