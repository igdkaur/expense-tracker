import React,{useState} from 'react'
import './ExpenseForm.css'

const ExpenseForm = () => {

  const [title,setTitle] =  useState('')
  const [amount,setAmount] = useState('')
  const [date,setDate] = useState('')

  const handleSubmit = (event) =>{
    event.preventDefault()
     
    const expenseData = {
      title : title,
      amount : amount,
      date : new Date (date) //memorise
    }
    console.log(expenseData)
  }

  const handleTitleChange = (event) =>{
    setTitle(event.target.value)
    console.log(title)
  }

  const handleAmountChange = (event) => {
    setAmount(event.target.value)
    console.log(amount)

  }
  const handleDateChange = (event) => {
    setDate(event.target.value)
    console.log(date)
  }
 
  return (
    <form onSubmit = {handleSubmit}>
      <div className='new-expense__controls'>
        <div className='new-expense__control'>
          <label>Title</label>
          <input type='text' onChange={handleTitleChange} />
        </div>
        <div className='new-expense__control'>
          <label>Amount</label>
          <input type='number' min='0.01' step='0.01' onChange={handleAmountChange}/>
        </div>
        <div className='new-expense__control'>
          <label>Date</label>
          <input type='date' min='2019-01-01' max='2022-12-31' onChange={handleDateChange}/>
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
 