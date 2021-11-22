import { useRef } from 'react';
import styles from './addTransaction.module.css';

const AddTransactionForm = ({historyItems, updateIncome, updateExpense}) => {
  const textInput = useRef(null);
  const amountInput = useRef(null);

  const handleSumbit = (e) => {
    e.preventDefault();

    const amountInputValue = +amountInput.current.value;

    historyItems.push({
      id: Math.random(100),
      text: textInput.current.value,
      amount: amountInputValue >= 0 ? `+${amountInputValue}` : amountInputValue
    });

    if (amountInputValue > 0) {
      updateIncome(amountInputValue);
      return;
    }

    updateExpense(amountInputValue);
  };

  return (
    <div className="transaction-form" onSubmit={handleSumbit}>
      <h2 className="transaction-form__subtitle">Add new transaction</h2>
      <form action="" className="transaction-form__container">
        <label className="transaction-form__field">
          <span className="transaction-form__label">Text</span>
          <input type="text" ref={textInput} className="transaction-form__input" name="text" />
        </label>
        <label className="transaction-form__field">
          <span className="transaction-form__label">
            Amount <br />
            (negative - expense, positive - income)
          </span>
          <input type="text" ref={amountInput} className="transaction-form__input" name="amount" />
        </label>
        <button className="transaction-form__submit">Add transaction</button>
      </form>
    </div>
  );
};

export default AddTransactionForm;