import React, { useState } from 'react';

import './styles.css';

// Component function named "App"
export default function App() {
  // Declare a state variable called "count" with an initial value of 0
  const [count, setCount] = useState(0);

  // Function to increment the "count" state variable by 1
  const incrementCount = () => {
    setCount(count + 1);
  }

  // Render the component
  return (
    <div>
      <p id="counter">{count}</p> {/* Render the current value of "count" */}
      <button onClick={incrementCount}>Increment</button> {/* Button that calls "incrementCount" function when clicked */}
    </div>
  );
}
