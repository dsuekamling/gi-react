// Import the React library
import React from 'react';

// Import the "Product" component and a CSS stylesheet
import Product from './Product';
import './styles.css';

// Define the "App" component using a function
// This component will be exported as the default export
// so that it can be used in other files
export default function App() {
    // Render some JSX code
    return (
        // Render a div element that contains a heading and two instances of the "Product" component
        <div>
            <h1>My Demo Shop</h1>
            <Product title="Product 1" price="10" description="First product" />
            <Product title="Product 2" price={"20"} description="Second product" />
        </div>
    );
}
