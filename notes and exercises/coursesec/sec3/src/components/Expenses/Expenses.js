import React from 'react';

import ExpenseItem from './ExpenseItem'; // import ExpenseItem component
import Card from '../UI/Card'; // import Card component
import './Expenses.css'; // import styles

const Expenses = (props) => { // declare Expenses component with props parameter
  return ( // return JSX
    <Card className="expenses"> // render Card component with "expenses" CSS class
      <ExpenseItem // render ExpenseItem component with data for title, amount, and date props
        title={props.items[0].title} // pass data for title prop for first item in items array received via props
        amount={props.items[0].amount} // pass data for amount prop for first item in items array received via props
        date={props.items[0].date} // pass data for date prop for first item in items array received via props
      />
      <ExpenseItem // render ExpenseItem component with data for title, amount, and date props
        title={props.items[1].title} // pass data for title prop for second item in items array received via props
        amount={props.items[1].amount} // pass data for amount prop for second item in items array received via props
        date={props.items[1].date} // pass data for date prop for second item in items array received via props
      />
      <ExpenseItem // render ExpenseItem component with data for title, amount, and date props
        title={props.items[2].title} // pass data for title prop for third item in items array received via props
        amount={props.items[2].amount} // pass data for amount prop for third item in items array received via props
        date={props.items[2].date} // pass data for date prop for third item in items array received via props
      />
      <ExpenseItem // render ExpenseItem component with data for title, amount, and date props
        title={props.items[3].title} // pass data for title prop for fourth item in items array received via props
        amount={props.items[3].amount} // pass data for amount prop for fourth item in items array received via props
        date={props.items[3].date} // pass data for date prop for fourth item in items array received via props
      />
    </Card>
  );
}

export default Expenses; // export Expenses component

