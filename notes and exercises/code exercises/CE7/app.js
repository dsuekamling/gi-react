// Import the React library and a CSS stylesheet, as well as the "useState" hook
import React, { useState } from 'react';
import './styles.css';

// Define the "App" component using a function
// This component will be exported as the default export
// so that it can be used in other files
export default function App() {
  // Declare two state variables: "message" and "isValid"
  // "message" is initially an empty string, and "isValid" is initially false
  const [message, setMessage] = useState('');
  const [isValid, setIsValid] = useState(false);

  // Define a function that will be called when the user types into the input field
  const handleMessageChange = (event) => {
    const value = event.target.value;
    setMessage(value); // Update the value of "message" state variable with the typed value

    // Determine whether the message is valid or not by checking its length
    if (value.trim().length < 3) {
      setIsValid(false); // If the message is less than 3 characters, mark it as invalid
    } else {
      setIsValid(true); // Otherwise, mark it as valid
    }
  };

  // Render a form with a label, input field, and a message indicating whether the input is valid
  return (
    <form>
      <label>Your message</label>
      <input type="text" value={message} onChange={handleMessageChange} />
      {isValid ? <p>Valid message</p> : <p>Invalid message</p>}
    </form>
  );
}
