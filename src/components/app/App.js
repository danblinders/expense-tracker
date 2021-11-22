import { useState } from 'react';
import styles from './app.module.css';
import Summary from '../summary/Summary';
import AddTransactionForm from '../addTransactionForm/AddTransactionForm';

function App() {
  const [income, setIncome] = useState(sessionStorage.getItem('balance') || 0);
  const [expense, setExpense] = useState(sessionStorage.getItem('balance') || 0);

  const balance = income - expense;

  const changeIncome = (newIncome) => {
    setIncome(income => income + newIncome);
  };

  const changeExpense = (newExpense) => {
    setExpense(expense => expense + Math.abs(newExpense));
  };

  return (
    <div className={styles.app}>
      <h1 className="app__title">Expense Tracker</h1>
      <Summary balance={balance} income={income} expense={expense}/>
      <AddTransactionForm setIncome={changeIncome} setExpense={changeExpense}/>
    </div>
  );
}

export default App;
