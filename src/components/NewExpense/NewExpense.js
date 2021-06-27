import React from 'react';
import ExpenseForm from './ExpenseForm';
import classes from './NewExpense.module.css';

const NewExpense = (props) => {
  return (
    <div className={classes['new-expense']}>
      <ExpenseForm />
    </div>
  );
};

export default NewExpense;