import NewExpense from './components/NewExpense/NewExpense';
import Expenses from './components/Expenses/Expenses';

function App() {
  const expenses = [{
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

  const addExpenseHandler = ( expenseData ) => {
    console.log("IN APP.JS");
    console.log(expenseData);
  }

  return (
    <div>
      <h2>Let's get started!</h2>
      <NewExpense addExpense={ addExpenseHandler }/>
      <Expenses items={ expenses } />     
    </div>
  );
}

export default App;
