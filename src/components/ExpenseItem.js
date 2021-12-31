import React from "react";

const ExpenseItem = (props) => {
  return (
    <div className=" expense-item">
      <div>{props.expenseDate.toISOString()}</div>
      <div className=" expense-item__description">
        <h2> {props.title}</h2>
      </div>
      <div className=" expense-item__price">{props.amount}</div>
    </div>
  );
};

export default ExpenseItem;

// now move expense to app.js as an array of objects and pass it to expense item
