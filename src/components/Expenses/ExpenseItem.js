import './ExpenseItem.css';
import './ExpenseDate';
import ExpenseDate from './ExpenseDate';
import Card from '../UI/Card';
import React from 'react';

function ExpenseItem(props) {

    let title = props.title;

    function handleClick() {
        title = "updated!";
    }


    return (
    <Card className="expense-item">
        <ExpenseDate date={props.date}/>
        <div className="expense-item__description">
            <h2>{title}</h2>
            <div className="expense-item__price">${props.amount}</div>
        </div>
        <button onClick={handleClick}>Change Title</button>
    </Card>
        
    );
}

export default ExpenseItem;