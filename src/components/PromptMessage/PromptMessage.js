import React from "react";

export function PromptMessage({ promptMessage }) {
  return (
    <div>
      <p style={{ color: "green" }}>{promptMessage}</p>
    </div>
  );
}
