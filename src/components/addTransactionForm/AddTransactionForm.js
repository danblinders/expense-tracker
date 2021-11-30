import { useState, useEffect } from 'react';
import { useForm } from 'react-hook-form';
import { ref, push, set } from '@firebase/database';
import database from '../../service/firebase';
import styles from './addTransaction.module.css';

const AddTransactionForm = ({updateHistory}) => {
  const historyRef = push(ref(database, '/history'));

  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  
  const {register, reset, formState: { errors, isSubmitSuccessful }, handleSubmit} = useForm({text: '', amount: ''});

  const onSubmit = (data, e) => {
    e.preventDefault();

    const amountInputValue = +amount;

    const newHistoryItem = {
      id: Math.random(100),
      text,
      amount: amountInputValue,
    };

    set(historyRef, newHistoryItem);

    updateHistory(prevHistory => [...prevHistory, newHistoryItem]);
  };

  useEffect(() => {
    if (isSubmitSuccessful) {
      reset({text: '', amount: ''});
    }
  }, [isSubmitSuccessful, reset]);
  
  return (
    <div className={styles.container} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={styles.subtitle}>Add new transaction</h2>
      <form action="#" className={styles.wrapper}>
        <div className={styles.fields}>
          <label className={styles.field}>
            <span className={styles.label}>Text</span>
            <input type="text" className={styles.input} {...register('text', {required: true})} onChange={(e) => setText(e.currentTarget.value)} />
            {errors.text && <span>Text is required</span>}
          </label>
          <label className={styles.field}>
            <span className={styles.label}>
              Amount <br />
              <span className={styles['secondary-text']}>(negative - expense, positive - income)</span>
            </span>
            <input type="number" className={styles.input} {...register('amount', {required: {value: true}})} onChange={(e) => setAmount(e.currentTarget.value)} />
            {errors.amount && <span>Amount is required</span>}
          </label>
        </div>
        <button className={styles.submit}>Add transaction</button>
      </form>
    </div>
  );
};

export default AddTransactionForm;