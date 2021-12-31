import React from "react";

const ExpenseItem = () => {
  const title = "food";
  const expenseDate = new Date(2021,9,9)
  const amount = 20;
  return (
    <div>
      <div>{title}</div>
      <div>{expenseDate.toISOString()}</div>
      <div>{amount}</div>
    </div>
  );
};

export default ExpenseItem;
