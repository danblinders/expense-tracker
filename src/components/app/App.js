import { useState } from 'react';
import styles from './app.module.css';
import Summary from '../summary/Summary';

function App() {
  const [income, setIncome] = useState(sessionStorage.getItem('balance'));
  const [expense, setExpense] = useState(sessionStorage.getItem('balance'));

  const balance = income - expense;

  return (
    <div className={styles.app}>
      <h1 className="app__title">Expense Tracker</h1>
      <Summary balance={balance} income={income} expense={expense}/>
    </div>
  );
}

export default App;
