import React from 'react';
import ExpenseForm from './ExpenseForm';
import classes from './NewExpense.module.css';

const NewExpense = (props) => {
  const addNewExpense = (expenseData) => {
    const newExpense = {
      title: expenseData.enteredTitle,
      amount: expenseData.enteredAmount,
      date: new Date(expenseData.enteredDate),
      id: Math.random().toString()
    };

    props.onAddNewExpense(newExpense);
  };

  return (
    <div className={classes['new-expense']}>
      <ExpenseForm onAddNewExpense={addNewExpense} />
    </div>
  );
};

export default NewExpense;