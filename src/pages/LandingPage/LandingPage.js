import React from "react";

export function LandingPage({ onButtonClick }) {
  return (
    <div>
      <h1>Are you ready to get started?</h1>
      <button onClick={onButtonClick}>YES!</button>
    </div>
  );
}
