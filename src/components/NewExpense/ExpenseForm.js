import React,{useState} from 'react'
import './ExpenseForm.css'

const ExpenseForm = (props) => {

  const [enteredTitle,setEnteredTitle] =  useState('')
  const [enteredAmount,setEnteredAmount] = useState('')
  const [enteredDate,setEnteredDate] = useState('')

  const handleSubmit = (event) =>{
    event.preventDefault()
     
    const expenseData = {
      title : enteredTitle,
      amount : +enteredAmount,
      date : new Date (enteredDate) //memorise
    }
    console.log(expenseData)
    props.onSave(expenseData)
    setEnteredTitle('')
    setEnteredAmount('')
    setEnteredDate('')
    
  }

  const handleTitleChange = (event) =>{
    setEnteredTitle(event.target.value)
    
  }

  const handleAmountChange = (event) => {
    setEnteredAmount(event.target.value)
    

  }
  const handleDateChange = (event) => {
    setEnteredDate(event.target.value)
    
  }
 
  return (
    <form onSubmit = {handleSubmit}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' value = {enteredTitle} onChange={handleTitleChange} />
          {/*   we bind value to entered title so use { }, value =  "enteredTitle" is incorct */}
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' value = {enteredAmount} min='0.01' step='0.01' onChange={handleAmountChange}/>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' value = {enteredDate} min='2019-01-01' max='2022-12-31' onChange={handleDateChange}/>
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
 