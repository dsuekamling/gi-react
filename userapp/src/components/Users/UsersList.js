// This import statement allows us to use React in this file
import React from 'react';

// This import statement allows us to use the Card component defined in the 'Card.js' file
import Card from '../UI/Card';

// This import statement brings in the CSS styles defined in the 'UsersList.module.css' file as a module
import classes from './UsersList.module.css';

// This is a functional component named UsersList which takes in props as input
const UsersList = (props) => {

  // This function returns the JSX that will be rendered by the component
  return (
    // This component is rendered with the class name defined in the imported CSS module
    <Card className={classes.users}>
      <ul>
        {/* This maps over the users array passed in through props and renders a list item for each user */}
        {props.users.map((user) => (
          <li key={user.id}>
            {/* This outputs the name and age of the user */}
            {user.name} ({user.age} years old)
          </li>
        ))}
      </ul>
    </Card>
  );
};

// This exports the UsersList component so it can be used in other parts of the application
export default UsersList;

