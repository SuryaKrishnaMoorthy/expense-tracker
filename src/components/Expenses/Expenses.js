import React, { useState } from "react";

import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import Card from '../UI/Card';

import './Expenses.css';

const Expenses = (props) => {
	const [ filteredYear, setfilteredYear ] = useState('2021');

	const filterChangeHandler = selectedYear => {
		 setfilteredYear(selectedYear);
	}
  
	const filteredExpenses = props.items.filter(expense => filteredYear === expense.expenseDate.getFullYear().toString());

	return (
		<Card className="expenses">
			<ExpensesFilter selected={ filteredYear } onChangeFilter={ filterChangeHandler } />
			<ExpensesList items={ filteredExpenses } />
		</Card>
		)
}

export default Expenses;