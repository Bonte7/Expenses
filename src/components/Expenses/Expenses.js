import React, {useState} from 'react';
import ExpenseItem from './ExpenseItem';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState("2022");

    function filterChangeHandler(year) {
        setFilteredYear(year);
        console.log(year);
    }
    

    return (

        <div>
            
            <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>

                {props.expenses.map((expense) =>(
                <ExpenseItem key={expense.id} title={expense.title} amount={expense.amount} date={expense.date}/>
                ))}
            </Card>
        </div>

    );
}

export default Expenses;