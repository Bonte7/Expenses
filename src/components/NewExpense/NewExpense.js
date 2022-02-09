import React from 'react';
import './NewExpense.css';
import NewExpenseForm from './NewExpenseForm';

function NewExpense(props) {

    function saveExpenseDataHandler(enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    }
    return (

        <div className="new-expense">
            {/*pass onSaveExpenseData as a prop over to NewExpenseForm, 
            when data is sent back, call saveExpenseHandler here*/}
            <NewExpenseForm onSaveExpenseData={saveExpenseDataHandler}/>

        </div>

    );
}

export default NewExpense;