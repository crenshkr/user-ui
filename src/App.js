import React, { useReducer, useState } from "react";
import "./App.css";
import { PrimaryPage } from "./pages/PrimaryPage/PrimaryPage";
import { LandingPage } from "./pages/LandingPage/LandingPage";

const initialScreenState = {
  showPrimaryPage: false,
};

function reducer(state, action) {
  switch (action.type) {
    case "SHOW_PRIMARY_PAGE":
      return { showPrimaryPage: true };

    default:
      return state;
  }
}

function App() {
  const [state, dispatch] = useReducer(reducer, initialScreenState);

  const handleButtonClick = () => {
    dispatch({ type: "SHOW_PRIMARY_PAGE" });
  };

  return (
    <div className="App">
      {state.showPrimaryPage ? (
        <PrimaryPage />
      ) : (
        <LandingPage onButtonClick={handleButtonClick} />
      )}
    </div>
  );
}

export default App;
