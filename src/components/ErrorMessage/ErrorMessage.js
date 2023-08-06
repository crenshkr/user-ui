import React from "react";

export function ErrorMessage({ errorMessage }) {
  return (
    <div>
      <p style={{ color: "red" }}>{errorMessage}</p>
    </div>
  );
}
