import React from "react";

export function SelectedMembers({ chosenTeamMembers }) {
  return (
    <div>
      <p className="chosen-team-members">Chosen Team Members:</p>
      {chosenTeamMembers.map((teamMember, index) => (
        <p key={teamMember}>{`${index + 1}: ${teamMember}`}</p>
      ))}
    </div>
  );
}
