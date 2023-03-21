import React, { useState } from 'react';

// Component function named "App"
export default function App() {
  // Declare a state variable "showWarning" with initial value "false"
  const [showWarning, setShowWarning] = useState(false);

  // Function to handle the click event on the "Delete" button
  const handleDeleteClick = () => {
    setShowWarning(true); // Set "showWarning" state to true to show the warning message
  };

  // Function to handle the click event on the "Proceed" button inside the warning message
  const handleProceedClick = () => {
    setShowWarning(false); // Set "showWarning" state back to false to hide the warning message
  };

  // Render the component
  return (
    <div>
      {/* Show the warning message only when "showWarning" state is true */}
      {showWarning ? (
        <div id="alert">
          <h2>Are you sure?</h2>
          <p>These changes can't be reverted!</p>
          <button onClick={handleProceedClick}>Proceed</button>
        </div>
      ) : null}
      {/* Render the "Delete" button */}
      <button onClick={handleDeleteClick}>Delete</button>
    </div>
  );
}

