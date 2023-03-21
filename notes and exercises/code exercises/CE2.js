// This is a quick exercise to get started with React and JSX code: Your task is to edit the JSX code of a provided React component such that it displays a h1 element with the text "Exercise done!" on the page.

// Important: The custom JSX code must be added inside the existing <div> element.


import React from 'react';

// don't change the Component name "App"
export default function App() {
    return (
        <div>
            <p>Practicing React...</p>
            <h1>Exercise done!</h1> 
			{/* inserted h1 and put exercise done  */}
        </div>
    );
}