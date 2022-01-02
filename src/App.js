import ExpenseItem from "./components/ExpenseItem";
import NewExpense from "./components/NewExpense";
import React,{useState} from 'react';

const defaultExpenses = [
  {
    id: "e1",
    title: "Toilet Paper",
    amount: 94.12,
    date: new Date(2020, 7, 14),
  },
  { id: "e2", title: "New TV", amount: 799.49, date: new Date(2021, 2, 12) },
  {
    id: "e3",
    title: "Car Insurance",
    amount: 294.67,
    date: new Date(2021, 2, 28),
  },
  {
    id: "e4",
    title: "New Desk (Wooden)",
    amount: 450,
    date: new Date(2021, 5, 12),
  },
];

function App() {
  const [expenses, setExpenses] = useState(defaultExpenses)
  
  const handleOnAddExpense = (newExpense) => {
    setExpenses((prevState) => {
      return [...prevState, newExpense]
    })
    console.log(expenses)
  }

  return (
    <div>
      <NewExpense onAddExpense = {handleOnAddExpense}/>
       
      {expenses.map(e => <ExpenseItem
        key = {e.id}
        title={e.title}
        amount={e.amount}
        expenseDate={e.date}
      />)}     
    </div>
  );
}

export default App;
