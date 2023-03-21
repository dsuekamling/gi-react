import React, { useState } from 'react';

// don't change the Component name "App"
export default function App() {
  // Declare a state variable 'isRed' and a function to update it 'setIsRed'
  const [isRed, setIsRed] = useState(false);

  // Function to toggle the value of isRed between true and false
  const toggleStyle = () => {
    setIsRed(prevIsRed => !prevIsRed);
  };

  // Render a paragraph with text "Style me!" that changes color based on 'isRed' value
  // Render a button with the text "Toggle style" that toggles the value of 'isRed'
  return (
    <div>
      <p style={{ color: isRed ? 'red' : 'white' }}>Style me!</p>
      <button onClick={toggleStyle}>Toggle style</button>
    </div>
  );
}