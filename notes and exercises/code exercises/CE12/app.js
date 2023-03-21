import React from 'react';
import './styles.css';

// don't change the Component name "App"
export default function App() {
    // Declare a state variable "isActive" and its corresponding "setIsActive" function
    const [isActive, setIsActive] = React.useState(false);

    // Define a function "toggleClass" to toggle the "isActive" state variable
    const toggleClass = () => {
        setIsActive(!isActive);
    };

    // Render a paragraph element with a conditional class "active" based on the "isActive" state variable,
    // and a button element with an "onClick" event listener that calls the "toggleClass" function when clicked
    return (
        <div>
            <p className={isActive ? 'active' : ''}>Style me!</p>
            <button onClick={toggleClass}>Toggle style</button>
        </div>
    );
}
