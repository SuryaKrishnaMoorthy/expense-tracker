import ExpenseItem from './components/ExpenseItem';

function App() {
  return (
    <div>
      <h2>Let's get started!</h2>
      <ExpenseItem date={'March 9th 2021'} title={'Car Insurance'} amount={'$234.90'} />
    </div>
  );
}

export default App;
