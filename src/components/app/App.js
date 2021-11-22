import { useState } from 'react';
import styles from './app.module.css';
import Summary from '../summary/Summary';
import AddTransactionForm from '../addTransactionForm/AddTransactionForm';
import HistoryList from '../historyList/HistoryList';

let history = [];

function App() {
  const [income, setIncome] = useState(sessionStorage.getItem('income') || 0);
  const [expense, setExpense] = useState(sessionStorage.getItem('expense') || 0);

  const balance = income - expense;

  const changeIncome = (newIncome) => {
    setIncome(income => {
      const updatedIncome = +income + newIncome;
      sessionStorage.setItem('income', updatedIncome);
      return updatedIncome;
    });
  };

  const changeExpense = (newExpense) => {
    setExpense(expense => {
      const updatedExpense = +expense + Math.abs(newExpense);
      sessionStorage.setItem('expense', updatedExpense);
      return updatedExpense;
    });
  };

  return (
    <div className={styles.app}>
      <h1 className="app__title">Expense Tracker</h1>
      <Summary balance={balance} income={income} expense={expense}/>
      <HistoryList items={history}/>
      <AddTransactionForm historyItems={history} updateIncome={changeIncome} updateExpense={changeExpense}/>
    </div>
  );
}

export default App;