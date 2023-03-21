import React from 'react';

import './styles.css';

// don't change the Component name "App"
export default function App() {
    // Define a function that logs a message to the console
    const clickHandler = () => {
        console.log('Clicked!');
    };
    
    // Render a div with a heading, paragraph, and button element.
    // When the button is clicked, the clickHandler function is called,
    // which logs a message to the console.
    return (
        <div>
          <h2>You're logged in!</h2>
          <p>Welcome to your user profile!</p>
          <button onClick={clickHandler}>Click me!</button>
        </div>
    );
}
