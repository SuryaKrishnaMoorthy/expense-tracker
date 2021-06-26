import './ExpenseForm.css';

const ExpenseForm = () => {
	return <form action="">
		<div>
			<div>
				<label htmlFor="title">Title</label>
				<input type="text" />
			</div>
			<div>
				<label htmlFor="amount">Amount</label>
				<input type="number" min='0.01' />
			</div>
			<div>
				<label htmlFor="date">Date</label>
				<input type="date" min='2019-01-01' max='2022-12-01' />
			</div>
		</div>
	</form>
}

export default ExpenseForm;