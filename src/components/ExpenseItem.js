import React from 'react';
import classes from './ExpenseItem.module.css';

import { format } from 'date-fns';

const ExpenseItem = (props) => {
  const expenseDate = format(props.item.date, 'do MMMM yyyy');
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