import { useState } from 'react';
import { useForm } from 'react-hook-form';
import styles from './addTransaction.module.css';

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

    if (amountInputValue > 0) {
      updateIncome(amountInputValue);
      return;
    }

    updateExpense(amountInputValue);
  };
  
  return (
    <div className="transaction-form" onSubmit={handleSubmit(onSubmit)}>
      <h2 className="transaction-form__subtitle">Add new transaction</h2>
      <form action="#" className="transaction-form__container">
        <label className="transaction-form__field">
          <span className="transaction-form__label">Text</span>
          <input type="text" className="transaction-form__input" value={text} {...register('text', {required: true})} onChange={(e) => setText(e.currentTarget.value)} />
          {errors.text && <span>Text is required</span>}
        </label>
        <label className="transaction-form__field">
          <span className="transaction-form__label">
            Amount <br />
            (negative - expense, positive - income)
          </span>
          <input type="text" className="transaction-form__input" value={amount} {...register('amount', {required: true})} onChange={(e) => setAmount(e.currentTarget.value)} />
          {errors.amount && <span>Amount is required</span>}
        </label>
        <button className="transaction-form__submit">Add transaction</button>
      </form>
    </div>
  );
};

export default AddTransactionForm;