import React, { useState } from "react";
import AuthPopup from "./AuthPopup"; // Assuming AuthPopup is in the same directory

const ParentComponent = () => {
  const [showPopup, setShowPopup] = useState(false);

  // Function to toggle pop-up visibility
  const togglePopup = () => {
    setShowPopup(!showPopup);
  };

  return (
    <div>
      <button onClick={togglePopup}>Open Pop-up</button>

      {/* Render AuthPopup only if showPopup is true */}
      {showPopup && <AuthPopup togglePopup={togglePopup} />}
    </div>
  );
};

export default ParentComponent;
