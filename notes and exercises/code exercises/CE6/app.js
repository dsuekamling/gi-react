// Import the React library and a CSS stylesheet, as well as the "useState" hook
import React, { useState } from 'react';
import './styles.css';

// Define the "App" component using a function
// This component will be exported as the default export
// so that it can be used in other files
export default function App() {
    // Declare a "price" state variable and a function to update it
    // The initial value of "price" is 100
    const [price, setPrice] = useState(100);

    // Define a function that will be called when the "Apply Discount" button is clicked
    // This function updates the value of "price" to 75
    const handleDiscountClick = () => {
        setPrice(75);
    };

    // Render some JSX code
    return (
        <div>
            <p>${price}</p>
            <button onClick={handleDiscountClick}>Apply Discount</button>
        </div>
    );
}
