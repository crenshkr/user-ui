import React from "react";
import { Card } from "./Card";

export function Cards({ users }) {
  return <>{users.length > 0 && users.map(user => <Card user={user} />)}</>;
}
