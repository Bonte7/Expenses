import React, {useState} from 'react';
import ExpenseList from './ExpenseList';
import './Expenses.css';
import Card from '../UI/Card';
import ExpensesFilter from './ExpensesFilter';
import ExpensesChart from '../Chart/ExpensesChart';

function Expenses(props) {

    const [filteredYear, setFilteredYear] = useState("2020");

    function filterChangeHandler(year) {
        setFilteredYear(year);
        
        
    }

    const filteredExpenses = props.expenses.filter(expense => {
        return expense.date.getFullYear().toString() === filteredYear;
    });

    

    return (

        <div>
            
            <Card className="expenses">
            <ExpensesFilter selected={filteredYear} onChangeFilter={filterChangeHandler}/>
            <ExpensesChart expenses={filteredExpenses}/>
            <ExpenseList expenses={filteredExpenses}/>
            </Card>
        </div>

    );
}

export default Expenses;