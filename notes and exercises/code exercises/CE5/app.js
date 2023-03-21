// Import the React library and a CSS stylesheet
import React from 'react';
import './styles.css';

// Define the "App" component using a function
// This component will be exported as the default export
// so that it can be used in other files
export default function App() {
    // Define a function that will be called when the "Bookmark" button is clicked
    const handleBookmarkClick = () => {
        console.log("Stored!"); // Log a message to the console
    };

    // Render some JSX code
    return <button onClick={handleBookmarkClick}>Bookmark</button>;
}

