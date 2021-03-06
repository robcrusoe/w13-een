import React, { useState } from 'react';
import classes from './App.module.css';
import ExpenseItem from './components/Expenses/ExpenseItem';
import NewExpense from './components/NewExpense/NewExpense';

const App = (props) => {
  const INITIAL_EXPENSES = [
    {
      id: 'e1',
      title: 'Toilet Paper',
      amount: 94.12,
      date: new Date(2020, 7, 14),
    },
    {
      id: 'e2',
      title: 'New TV',
      amount: 799.49,
      date: new Date(2021, 2, 12)
    },
    {
      id: 'e3',
      title: 'Car Insurance',
      amount: 294.67,
      date: new Date(2021, 2, 28),
    },
    {
      id: 'e4',
      title: 'New Desk (Wooden)',
      amount: 450,
      date: new Date(2021, 5, 12),
    },
  ];

  const [expenses, setExpenses] = useState(INITIAL_EXPENSES);

  const onAddNewExpense = (newExpense) => {
    setExpenses((prevState) => {
      return [...prevState, newExpense];
    });
  };

  return (
    <div className={classes.App}>
      <h1>Hello, There!</h1>
      <NewExpense onAddNewExpense={onAddNewExpense} />

      {expenses.map(expense => <ExpenseItem key={expense.id} item={expense} />)}
    </div>
  );
};

export default App;
