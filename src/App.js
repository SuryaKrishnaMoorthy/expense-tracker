import React, { useState } from 'react';
import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

const DUMMY_EXPENSES = [{
    id: 'e1',
    expenseDate: new Date(2021, 3, 31),
    expenseTitle: 'Car Insurance',
    expenseAmount: '$234.90'
  },
  { 
    id: 'e2',
    expenseDate: new Date(2021, 2, 28),
    expenseTitle: 'Toilet Paper',
    expenseAmount: '$60'
  },
  { 
    id: 'e3',
    expenseDate: new Date(2021, 1, 31),
    expenseTitle: 'Rent',
    expenseAmount: '$2034'
  },
  { 
    id: 'e4',
    expenseDate: new Date(2020, 3, 17),
    expenseTitle: 'Car Insurance',
    expenseAmount: '$234.90'
  }
  ];

function App() {

  const [ expenses, setExpenses ] = useState(DUMMY_EXPENSES);

  const addExpenseHandler = ( expenseData ) => {
    setExpenses(prevExpenses => [expenseData, ...prevExpenses]);
  }

  return (
    <div>
      <NewExpense addExpense={ addExpenseHandler }/>
      <Expenses items={ expenses } />     
    </div>
  );
}

export default App;
