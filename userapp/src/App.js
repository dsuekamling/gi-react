import React, { useState } from 'react'; // import React library and useState hook

import AddUser from './components/Users/AddUser'; // import AddUser component
import UsersList from './components/Users/UsersList'; // import UsersList component

function App() {
  const [usersList, setUsersList] = useState([]); // define state variable for usersList and initialize it as an empty array

  const addUserHandler = (uName, uAge) => { // define a function that adds a new user to the usersList state
    setUsersList((prevUsersList) => { // use the useState hook to update the usersList state
      return [
        ...prevUsersList, // use spread operator to copy the previous list
        { name: uName, age: uAge, id: Math.random().toString() }, // add a new user with name, age, and a unique ID generated using Math.random()
      ];
    });
  };

  return (
    <div>
      <AddUser onAddUser={addUserHandler} /> // render the AddUser component and pass the addUserHandler function as a prop
      <UsersList users={usersList} /> // render the UsersList component and pass the usersList state as a prop
    </div>
  );
}

export default App; // export the App component as the default export of this module
