import { useEffect, useState } from 'react';
import { ref, child, get } from 'firebase/database';
import database from '../../service/firebase';
import styles from './app.module.css';
import Summary from '../summary/Summary';
import AddTransactionForm from '../addTransactionForm/AddTransactionForm';
import HistoryPreview from '../historyPreview/HistoryPreview';

function App() {
  const [history, setHistory] = useState(null);

  let income = 0, expense = 0;

  const historyDates = history ? Object.keys(history) : null;

  historyDates?.forEach(date => {
    history[date].forEach(item => {
      const itemAmount = +item.amount;
      if (itemAmount >= 0) {
        income += itemAmount;
      } else {
        expense += itemAmount;
      }
    });
  });

  const balance = income + expense;

  useEffect(() => {
    get(child(ref(database), '/history')).then(snapshot => {
      const newHistoryObj= {};
      for (let dateKey in snapshot.val()) {
        if (Object.prototype.toString.call(snapshot.val()[dateKey]) === '[object Object]') {
          newHistoryObj[dateKey] = [];
          
          for (let itemKey in snapshot.val()[dateKey]) {
            newHistoryObj[dateKey].push(snapshot.val()[dateKey][itemKey]);
          }
        }
      }

      setHistory(newHistoryObj);
    });
  }, []);

  return (
    <div className={styles.container}>
      <h1 className={styles.title}>Expense Tracker</h1>
      <Summary balance={balance} income={income} expense={expense}/>
      <HistoryPreview items={history}/>
      <AddTransactionForm updateHistory={setHistory}/>
    </div>
  );
}

export default App;