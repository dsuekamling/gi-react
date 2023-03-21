import React from 'react';  // Importing the React library
import './Card.css';  // Importing the Card CSS file

const Card = (props) => {  // Defining a Card functional component with props parameter
  const classes = 'card ' + props.className;  // Concatenating 'card' string and the className prop value, and storing it in classes variable

  return <div className={classes}>{props.children}</div>;  // Returning a div element with classes and children props
};

export default Card;  // Exporting the Card component as a default export
