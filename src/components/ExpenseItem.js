import React from 'react';
import classes from './ExpenseItem.module.css';

const ExpenseItem = (props) => {
  const expenseDate = new Date(2021, 4, 28).toISOString();
  const expenseTitle = 'Car Insurance';
  const expenseAmount = 294.67;

  return (
    <div className={classes['expense-item']}>
      <div>
        {expenseDate}
      </div>

      <div className={classes['expense-item__description']}>
        <h2>{expenseTitle}</h2>
      </div>

      <div className={classes['expense-item__price']}>
        ${expenseAmount}
      </div>
    </div>
  );
};

export default ExpenseItem;