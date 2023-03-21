import React from 'react'; // Importing the React library
import './ExpenseDate.css'; // Importing a CSS file for styling

const ExpenseDate = (props) => { // Creating a functional component called "ExpenseDate" that takes in a "props" object
  const month = props.date.toLocaleString('en-US', { month: 'long' }); // Extracting the month from the date using the "toLocaleString()" method
  const day = props.date.toLocaleString('en-US', { day: '2-digit' }); // Extracting the day from the date using the "toLocaleString()" method
  const year = props.date.getFullYear(); // Extracting the year from the date using the "getFullYear()" method

  return ( // Returning JSX code to render a div with 3 child divs, each displaying the month, year, and day of the expense
    <div className='expense-date'>
      <div className='expense-date__month'>{month}</div>
      <div className='expense-date__year'>{year}</div>
      <div className='expense-date__day'>{day}</div>
    </div>
  );
};

export default ExpenseDate; // Exporting the "ExpenseDate" component for use in other parts of the application
