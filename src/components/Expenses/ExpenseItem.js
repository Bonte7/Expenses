import './ExpenseItem.css';
import './ExpenseDate';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import React, { useState } from 'react';

function ExpenseItem(props) {

    //useState always returns two values, the current props value and a function to update that value.
    //here the array is destrcutured so we can use those values returned with title and setTitle. (Can be named however).
    const [title, setTitle] = useState(props.title);

    function handleClick() {
        setTitle("Updated!");
    }


    return (

    <li>
    <Card className="expense-item">
        <ExpenseDate date={props.date}/>
        <div className="expense-item__description">
            <h2>{title}</h2>
            <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={handleClick}>Change Title</button>
    </Card>
    </li>
    );
}

export default ExpenseItem;