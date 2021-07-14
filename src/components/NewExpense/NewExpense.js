import React, { useState } from "react";

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';

const NewExpense = ( props ) => {

	const [ showForm, setShowForm ] = useState(false)

	const saveExpenseDataHandler = (enteredData) => {
		const expenseData = {
			...enteredData,
			id: Math.random().toString()
		}
		setShowForm(!showForm);
		props.addExpense(expenseData);

	}
	
	const showFormHandler = () => {
		setShowForm(!showForm);
	};

	const expenseForm = <ExpenseForm 
		showFormHandler={ showFormHandler } 
		onSaveExpenseData={ saveExpenseDataHandler }/>;
	
	return (
		<div className='new-expense'>
				{ !showForm && <div onClick={ showFormHandler }>Add New Expense</div> }
				{ showForm && expenseForm }
		</div>
	)
};

export default NewExpense;