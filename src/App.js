import Expenses from './components/Expenses/Expenses';

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
      <Expenses items={expenses} />     
    </div>
  );
}

export default App;
