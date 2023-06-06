import React from "react";
import { Card } from "./Card/Card";

export function Cards({ users, setSelectedUser }) {
  return (
    <>
      {users.length > 0 &&
        users.map(user => (
          <Card user={user} key={user.id} setSelectedUser={setSelectedUser} />
        ))}
    </>
  );
}
