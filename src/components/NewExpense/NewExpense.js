import React, {useState} from 'react';
import './NewExpense.css';
import NewExpenseForm from './NewExpenseForm';

function NewExpense(props) {

    const [isEditing, setIsEditing] = useState(false);

    function saveExpenseDataHandler(enteredExpenseData) {
        const expenseData = {
            ...enteredExpenseData,
            id: Math.random().toString()
        };
        props.onAddExpense(expenseData);
    }

    function startEditingHandler() {
        setIsEditing(true);
    }

    function stopEditing() {
        setIsEditing(false);
    }

    return (

        <div className="new-expense">
            {/*pass onSaveExpenseData as a prop over to NewExpenseForm, 
            when data is sent back, call saveExpenseHandler here*/}
            

            {!isEditing && <button onClick={startEditingHandler}>Add New Expense</button>}
            {isEditing && <NewExpenseForm onSaveExpenseData={saveExpenseDataHandler} onCancel={stopEditing}/>}

        </div>

    );
}

export default NewExpense;