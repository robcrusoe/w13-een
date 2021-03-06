import React, { useState } from 'react';
import classes from './ExpenseForm.module.css';

const ExpenseForm = (props) => {
  // const [title, setTitle] = useState('');
  // const [amount, setAmount] = useState('');
  // const [date, setDate] = useState('');
  const [userInput, setUserInput] = useState({
    enteredTitle: '',
    enteredAmount: '',
    enteredDate: ''
  });

  const titleChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredTitle: event.target.value
      };
    });
  };

  const amountChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredAmount: +event.target.value
      };
    });
  };

  const dateChangeHandler = (event) => {
    setUserInput((prevState) => {
      return {
        ...prevState,
        enteredDate: event.target.value
      };
    });
  };

  const submitHandler = (event) => {
    event.preventDefault();

    /* Do something here ... */
    props.onAddNewExpense(userInput);
    
    /* Clear input elements on form submission ... */
    setUserInput({
      enteredTitle: '',
      enteredAmount: '',
      enteredDate: ''
    });
  };

  return (
    <form onSubmit={submitHandler}>
      <div className={classes['new-expense__controls']}>
        <div className={classes['new-expense__control']}>
          <label>Title</label>
          <input type="text" onChange={titleChangeHandler} value={userInput.enteredTitle} />
        </div>

        <div className={classes['new-expense__control']}>
          <label>Amount</label>
          <input type="number" min="0.01" step="0.01" onChange={amountChangeHandler} value={userInput.enteredAmount} />
        </div>

        <div className={classes['new-expense__control']}>
          <label>Date</label>
          <input type="date" min="2019-01-01" max="2022-12-31" onChange={dateChangeHandler} value={userInput.enteredDate} />
        </div>
      </div>

      <div className={classes['new-expense__actions']}>
        <button type="submit">Add Expense</button>
      </div>
    </form>
  );
};

export default ExpenseForm;