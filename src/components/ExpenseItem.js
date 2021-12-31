import React from "react";
import ExpenseDate from "./ExpenseDate";
import './ExpenseItem.css';

const ExpenseItem = (props) => {
  return (
    <div className=" expense-item">
      <ExpenseDate date = {props.expenseDate}/>
      <div className=" expense-item__description">
        <h2> {props.title}</h2>
      </div>
      <div className=" expense-item__price">{props.amount}</div>
    </div>
  );
};

export default ExpenseItem;

// now move expense to app.js as an array of objects and pass it to expense item
