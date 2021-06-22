import ExpenseItem from './ExpenseItem';
import './Expenses.css';

const Expenses = (props) => {
	
	return (
		<div className="expenses">
			{
				props.items.map(expense => <ExpenseItem	
					date={ expense.expenseDate } 
					title={ expense.expenseTitle } 
					amount={ expense.expenseAmount }
					 />)
			}
		</div>
		)
}

export default Expenses;