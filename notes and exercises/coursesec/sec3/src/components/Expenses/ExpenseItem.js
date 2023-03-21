import React from 'react';

import ExpenseDate from './ExpenseDate'; // Importing the ExpenseDate component.
import Card from '../UI/Card'; // Importing the Card component.
import './ExpenseItem.css'; // Importing the CSS file for this component.

const ExpenseItem = (props) => { // Declaring a functional component called ExpenseItem and passing props as its argument.
  return (
    <Card className='expense-item'> {/* Using the Card component to wrap the JSX elements below. */}
      <ExpenseDate date={props.date} /> {/* Using the ExpenseDate component to render the date. */}
      <div className='expense-item__description'> {/* Div for the expense item description. */}
        <h2>{props.title}</h2> {/* The title of the expense item passed as a prop. */}
        <div className='expense-item__price'>${props.amount}</div> {/* The amount of the expense item passed as a prop. */}
      </div>
    </Card>
  );
}

export default ExpenseItem; // Exporting the ExpenseItem component.```
