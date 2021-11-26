import { useState } from 'react';
import { useForm } from 'react-hook-form';
import { ref, push, set } from '@firebase/database';
import database from '../../service/firebase';
import styles from './addTransaction.module.css';

const historyRef = push(ref(database, '/history'));

const AddTransactionForm = ({historyItems, updateIncome, updateExpense}) => {

  const [text, setText] = useState('');
  const [amount, setAmount] = useState('');
  
  const {register, formState: { errors }, handleSubmit} = useForm();

  const onSubmit = (data, e) => {
    e.preventDefault();

    const amountInputValue = +amount;

    historyItems.push({
      id: Math.random(100),
      text,
      amount: amountInputValue,
    });

    set(historyRef, {
      id: Math.random(100),
      text,
      amount: amountInputValue,
    });

    if (amountInputValue > 0) {
      updateIncome(amountInputValue);
      return;
    }

    updateExpense(amountInputValue);
  };
  
  return (
    <div className={styles.container} onSubmit={handleSubmit(onSubmit)}>
      <h2 className={styles.subtitle}>Add new transaction</h2>
      <form action="#" className={styles.wrapper}>
        <label className={styles.field}>
          <span className={styles.label}>Text</span>
          <input type="text" className={styles.input} value={text} {...register('text', {required: true})} onChange={(e) => setText(e.currentTarget.value)} />
          {errors.text && <span>Text is required</span>}
        </label>
        <label className={styles.field}>
          <span className={styles.label}>
            Amount <br />
            (negative - expense, positive - income)
          </span>
          <input type="number" className={styles.input} value={amount} {...register('amount', {required: {value: true}})} onChange={(e) => setAmount(e.currentTarget.value)} />
          {errors.amount && <span>Amount is required</span>}
        </label>
        <button className={styles.submit}>Add transaction</button>
      </form>
    </div>
  );
};

export default AddTransactionForm;