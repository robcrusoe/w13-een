import React from 'react';
import classes from './ExpenseItem.module.css';

const ExpenseItem = (props) => {
  const expenseDate = props.item.date.toISOString();
  const expenseTitle = props.item.title;
  const expenseAmount = props.item.amount;

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