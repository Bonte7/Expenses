import React, {useState} from 'react';
import './NewExpenseForm.css';

function NewExpenseForm(props) {

    const [enteredTitle, setEnteredTitle] = useState('');
    const [enteredAmount, setAmount] = useState('');
    const [enteredDate, setDate] = useState('');


    //handle each onChange event from the expense form inputs
    function titleChangeHandler(event) {
        setEnteredTitle(event.target.value);
    }

    function amountChangedHandler(event) {
        setAmount(event.target.value);
    }

    function dateChangedHandler(event) {
        setDate(event.target.value);
    }

    //runs when submit button is clicked
    function submitHandler(event) {
        event.preventDefault();

        const expenseData = {
            title: enteredTitle,
            amount: enteredAmount,
            date: enteredDate
        };

        //call the function from NewExpense.js and pass the expenseData object to it. 
        //(accessing the function using props)
        props.onSaveExpenseData(expenseData);
        setEnteredTitle("");
        setAmount("");
        setDate("");
    }

    return (

        <form onSubmit={submitHandler}>
            <div className='new-expense__controls'>
                <div className='new-expense__control'>
                    <label>Title</label>
                    <input type="text" value={enteredTitle} onChange={titleChangeHandler}></input>
                </div>
                <div className='new-expense__control'>
                    <label>Amount</label>
                    <input type="number" value={enteredAmount} min="0.01" step="0.01" onChange={amountChangedHandler}></input>
                </div>
                <div className='new-expense__control'>
                    <label>Date</label>
                    <input type="date" value={enteredDate} onChange={dateChangedHandler}></input>
                </div>
                <div className="new-expense__actions">
                    <button type="submit">Add Expense</button>
                </div>
            </div>
        </form>

    );
}

export default NewExpenseForm;