import React from "react";

export default function Users({ users }) {
  return (
    <div style={{ border: "1px solid black", padding: "1rem" }}>
      {users?.map((user) => {
        return <div>{user}</div>;
      })}
    </div>
  );
}
