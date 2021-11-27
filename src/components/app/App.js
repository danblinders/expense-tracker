import { useEffect, useState } from 'react';
import { ref, child, get } from 'firebase/database';
import database from '../../service/firebase';
import styles from './app.module.css';
import Summary from '../summary/Summary';
import AddTransactionForm from '../addTransactionForm/AddTransactionForm';
import HistoryList from '../historyList/HistoryList';

function App() {
  const [history, setHistory] = useState(null);

  let income = 0, expense = 0;

  history?.forEach(item => {
    const itemAmount = +item.amount;
    if (itemAmount >= 0) {
      income += itemAmount;
    } else {
      expense += itemAmount;
    }
  });

  const balance = income + expense;

  useEffect(() => {
    get(child(ref(database), '/history')).then(snapshot => {
      const newHistoryArr = [];

      for (let key in snapshot.val()) {
        newHistoryArr.push(snapshot.val()[key]);
      }

      setHistory(newHistoryArr);
    });
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Expense Tracker</h1>
      <Summary balance={balance} income={income} expense={expense}/>
      <HistoryList items={history}/>
      <AddTransactionForm updateHistory={setHistory}/>
    </div>
  );
}

export default App;