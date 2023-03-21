import React from 'react';
import Todo from './Todo';
import './styles.css';

// An array of dummy todo items
const DUMMY_TODOS = [
  'Learn React',
  'Practice React',
  'Profit!'
];

// Component function named "App"
export default function App() {
  // Render the component
  return (
    <ul>
      {/* Use the map() method to iterate over the dummy todo items and render a Todo component for each */}
      {DUMMY_TODOS.map((todoText) => (
        <Todo key={todoText} text={todoText} />
      ))}
    </ul>
  );
}