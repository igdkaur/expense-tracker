import React from 'react';

import ExpenseForm from './ExpenseForm';
import './NewExpense.css';



const NewExpense = (props) => {

const handleSave = (enteredExpenseData) => {
  const expenseData = { ...enteredExpenseData, 
  id:Math.random().toString()
}
props.onAddExpense (expenseData);


}

  
  return (
    <div className='new-expense'>
      <ExpenseForm onSave = {handleSave}/>
    </div>
  );
};

export default NewExpense;