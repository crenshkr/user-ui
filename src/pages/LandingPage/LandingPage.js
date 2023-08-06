import React from "react";
import "../LandingPage/landingPage.css";

export function LandingPage({ dispatch }) {
  const handleButtonClick = () => {
    dispatch({ type: "SHOW_PRIMARY_PAGE" });
  };

  return (
    <div className="landingPage">
      <h1>Are you ready to get started?</h1>
      <button className="startButton" onClick={handleButtonClick}>
        YES!
      </button>
    </div>
  );
}
