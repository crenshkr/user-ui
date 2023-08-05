import React, { useState } from "react";
import "./App.css";
import { PrimaryPage } from "./pages/PrimaryPage/PrimaryPage";
import { LandingPage } from "./pages/LandingPage/LandingPage";

function App() {
  const [showPrimaryPage, setShowPrimaryPage] = useState(false);

  const handleButtonClick = () => {
    setShowPrimaryPage(true);
  };

  return (
    <div>
      {showPrimaryPage ? (
        <PrimaryPage />
      ) : (
        <LandingPage onButtonClick={handleButtonClick} />
      )}
    </div>
  );
}

export default App;
