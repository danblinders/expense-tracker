import { useEffect, useState } from 'react';
import { ref, child, get } from 'firebase/database';
import database from '../../service/firebase';
import styles from './app.module.css';
import Summary from '../summary/Summary';
import AddTransactionForm from '../addTransactionForm/AddTransactionForm';
import HistoryList from '../historyList/HistoryList';

function App() {
  const [income, setIncome] = useState(sessionStorage.getItem('income') ?? 0);
  const [expense, setExpense] = useState(sessionStorage.getItem('expense') ?? 0);
  const [history, setHistory] = useState([]);

  const balance = income - expense;

  useEffect(() => {
    get(child(ref(database), '/history')).then(snapshot => {
      const newHistoryArr = [];

      for (let key in snapshot.val()) {
        newHistoryArr.push(snapshot.val()[key]);
      }

      setHistory(newHistoryArr);
    });
  }, []);

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