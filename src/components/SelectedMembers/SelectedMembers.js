import React from "react";

export function SelectedMembers({ teamMembers }) {
  return (
    <div>
      <p className="chosen-team-members">Chosen Team Members:</p>
      {teamMembers.map((teamMember, index) => (
        <p key={teamMember}>{`${index + 1}: ${teamMember}`}</p>
      ))}
    </div>
  );
}
