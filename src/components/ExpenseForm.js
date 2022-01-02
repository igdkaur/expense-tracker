import React from 'react'
import './ExpenseForm.css'

const ExpenseForm = () => {

  const handleAmount = (event) =>{
    console.log(event.target.value)
  }
  const handlDate = (event) =>{
    console.log(event.target.value)
  }
  const handleDate = (event) =>{
    console.log(event.target.value)
  }
  return (
    <form >
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' onChange={handlDate} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' onChange={handleAmount}/>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2019-01-01' max='2022-12-31' onChange={handleDate}/>
        </div>
      </div>
      <div className='new-expense__actions'>
        <button type='submit'>Add Expense</button>
      </div>
    </form>
  )
}

export default ExpenseForm
// one form
// one div for all elements in form
// one div both for label and input File
// same with next two fields 
// one div for button 
 