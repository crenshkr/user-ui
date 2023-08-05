import React from "react";
import { Card } from "../Card/Card";

export function Cards({ allUsers, chosenTeamMembers, dispatch }) {
  return (
    <>
      {allUsers.length > 0 &&
        allUsers.map(user => (
          <Card
            user={user}
            key={user.id}
            dispatch={dispatch}
            chosenTeamMembers={chosenTeamMembers}
          />
        ))}
    </>
  );
}
