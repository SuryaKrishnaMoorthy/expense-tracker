import React, { useState } from "react";

import ExpensesList from './ExpensesList';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from "./ExpensesChart.js";
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
			<ExpensesChart expenses={filteredExpenses} />
			<ExpensesFilter selected={ filteredYear } onChangeFilter={ filterChangeHandler } />
			<ExpensesList items={ filteredExpenses } />
		</Card>
		)
}

export default Expenses;