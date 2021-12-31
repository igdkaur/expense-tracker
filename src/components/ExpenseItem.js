import React from "react";

const ExpenseItem = (props) => {


  return (
    <div>
      <div>{props.title}</div>
      <div>{props.expenseDate.toISOString()}</div>
      <div>{props.amount}</div>
    </div>
  );
};

export default ExpenseItem;

// now move expense to app.js as an array of objects and pass it to expense item 