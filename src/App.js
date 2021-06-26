import classes from './App.module.css';
import ExpenseItem from './components/ExpenseItem';

const App = (props) => {
  return (
    <div className={classes.App}>
      <h1>Hello, World!</h1>
      <p>Let's get started ...</p>

      <ExpenseItem />
    </div>
  );
};

export default App;
