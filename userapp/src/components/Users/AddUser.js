import React, { useState } from 'react';
import Card from '../UI/Card';
import Button from '../UI/Button';
import ErrorModal from '../UI/ErrorModal';
import classes from './AddUser.module.css';

// define a functional component named AddUser which takes in props
const AddUser = (props) => {
  // define state using the useState hook for enteredUsername, enteredAge, and error
  const [enteredUsername, setEnteredUsername] = useState('');
  const [enteredAge, setEnteredAge] = useState('');
  const [error, setError] = useState();

  // define the function to handle adding a new user
  const addUserHandler = (event) => {
    // prevent the default form submission behavior
    event.preventDefault();
    // check if the input fields are empty
    if (enteredUsername.trim().length === 0 || enteredAge.trim().length === 0) {
      // set an error state with a message and return
      setError({
        title: 'Invalid input',
        message: 'Please enter a valid name and age (non-empty values).',
      });
      return;
    }
    // check if the age is less than 1
    if (+enteredAge < 1) {
      // set an error state with a message and return
      setError({
        title: 'Invalid age',
        message: 'Please enter a valid age (> 0).',
      });
      return;
    }
    // if input is valid, pass the input data to the parent component
    props.onAddUser(enteredUsername, enteredAge);
    // reset the input fields
    setEnteredUsername('');
    setEnteredAge('');
  };

  // define the function to handle changes in the username input field
  const usernameChangeHandler = (event) => {
    setEnteredUsername(event.target.value);
  };

  // define the function to handle changes in the age input field
  const ageChangeHandler = (event) => {
    setEnteredAge(event.target.value);
  };

  // define the function to handle closing the error modal
  const errorHandler = () => {
    setError(null);
  };

  // return the JSX code to render the component
  return (
    <div>
      {error && (
        <ErrorModal
          title={error.title}
          message={error.message}
          onConfirm={errorHandler}
        />
      )}
      <Card className={classes.input}>
        <form onSubmit={addUserHandler}>
          <label htmlFor="username">Username</label>
          <input
            id="username"
            type="text"
            value={enteredUsername}
            onChange={usernameChangeHandler}
          />
          <label htmlFor="age">Age (Years)</label>
          <input
            id="age"
            type="number"
            value={enteredAge}
            onChange={ageChangeHandler}
          />
          <Button type="submit">Add User</Button>
        </form>
      </Card>
    </div>
  );
};

// export the component
export default AddUser;