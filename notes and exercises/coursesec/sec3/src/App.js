// import React library and Expenses component
import React from 'react';
import Expenses from './components/Expenses/Expenses';

// Define the App component
const App = () => {
// Define an array of expenses with id, title, amount, and date properties
const expenses = [
{
id: 'e1',
title: 'Toilet Paper',
amount: 94.12,
date: new Date(2020, 7, 14),
},
{
id: 'e2',
title: 'New TV',
amount: 799.49,
date: new Date(2021, 2, 12)
},
{
id: 'e3',
title: 'Car Insurance',
amount: 294.67,
date: new Date(2021, 2, 28),
},
{
id: 'e4',
title: 'New Desk (Wooden)',
amount: 450,
date: new Date(2021, 5, 12),
},
];

// Render the App component with JSX syntax
return (
<div>
<h2>Let's get started!</h2>
<Expenses items={expenses} />
</div>
);
}

// Export the App component as default
export default App;
