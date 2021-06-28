import ExpenseItem from './ExpenseItem';
import Card from '../UI/Card';
import './Expenses.css';

const Expenses = (props) => {
	
	return (
		<Card className="expenses">
			{
				props.items.map(expense => <ExpenseItem	
					key={ expense.id }
					date={ expense.expenseDate } 
					title={ expense.expenseTitle } 
					amount={ expense.expenseAmount }
					 />)
			}
		</Card>
		)
}

export default Expenses;