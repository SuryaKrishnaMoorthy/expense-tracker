import React, { useState } from "react";
import ExpenseItem from './ExpenseItem';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';

import './Expenses.css';

const Expenses = (props) => {
	const [ filteredYear, setfilteredYear ] = useState('2021');

	const filterChangeHandler = selectedYear => {
		 setfilteredYear(selectedYear);
	}
  
	const filteredExpenses = props.items.filter(expense => filteredYear === expense.expenseDate.getFullYear().toString());

	let expenseContent = <p>No content found.</p>;

	if (filteredExpenses.length > 0) {
		expenseContent = 	filteredExpenses.map(expense => <ExpenseItem	
			key={ expense.id }
			date={ expense.expenseDate } 
			title={ expense.expenseTitle } 
			amount={ expense.expenseAmount }
			 />)
	}

	return (
		<Card className="expenses">
			<ExpensesFilter selected={ filteredYear } onChangeFilter={ filterChangeHandler } />
			{ expenseContent }
		</Card>
		)
}

export default Expenses;