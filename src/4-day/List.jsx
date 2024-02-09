import React from "react";

export default function List() {
  const users = [
    { name: "Name1" },
    { name: "Name2" },
    { name: "Name3" },
    { name: "Name4" },
  ];
  const data = [1, 2, 3];

  const listOfUsers = users.map((user) => {
    return (
      <div
        style={{
          boxShadow: "2px 2px 4px rgba(0,0,0,0.5)",
          padding: "1rem",
        }}
      >
        {user.name}
      </div>
    );
  });

  return (
    <>
      <div style={{ color: "red" }}>
        {data.map((num) => {
          return <div>{num}</div>;
        })}
      </div>
      <div>{listOfUsers}</div>
    </>
  );
}
