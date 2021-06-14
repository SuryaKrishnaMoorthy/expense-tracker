import ExpenseItem from './components/ExpenseItem/ExpenseItem';

function App() {
  const expenses = [{
    expenseDate: new Date(2021, 3, 31),
    expenseTitle: 'Car Insurance',
    expenseAmount: '$234.90'
  },
  {
    expenseDate: new Date(2021, 2, 28),
    expenseTitle: 'Toilet Paper',
    expenseAmount: '$60'
  },
  {
    expenseDate: new Date(2021, 1, 31),
    expenseTitle: 'Rent',
    expenseAmount: '$2034'
  },
  {
    expenseDate: new Date(2020, 3, 17),
    expenseTitle: 'Car Insurance',
    expenseAmount: '$234.90'
  }
  ];

  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem date={ expenses[0].expenseDate } title={ expenses[0].expenseTitle } amount={ expenses[0].expenseAmount } />
      <ExpenseItem date={ expenses[1].expenseDate } title={ expenses[1].expenseTitle } amount={ expenses[1].expenseAmount } />     
    </div>
  );
}

export default App;
