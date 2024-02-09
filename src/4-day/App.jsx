import React from "react";
import Users from "./Users";
import List from "./List";

export default function App() {
  return (
    <>
      <List />
      <Users users={[1]} />
      <Users users={[1, 2]} />
      <Users users={[1, 2, 3]} />
      <Users users={[1, 2, 3, 4]} />
      <Users users={[1, 2, 3, 4, 5]} />
    </>
  );
}
