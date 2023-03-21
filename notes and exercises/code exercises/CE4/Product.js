// Import the React library
import React from 'react';

// Define a "Product" component using a function
// This component will be exported as the default export
// so that it can be used in other files
export default function Product(props) {
    // Render some JSX code
    return (
        // Render an article element that contains the product information
        <article className="product">
            <h2>{props.title}</h2>
            <p className="price">${props.price}</p>
            <p>{props.description}</p>
        </article>
    );
}




