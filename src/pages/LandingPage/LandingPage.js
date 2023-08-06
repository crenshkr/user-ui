import React from "react";
import "../LandingPage/landingPage.css";

export function LandingPage({ onButtonClick }) {
  return (
    <div className="landingPage">
      <h1>Are you ready to get started?</h1>
      <button className="startButton" onClick={onButtonClick}>
        YES!
      </button>
    </div>
  );
}
