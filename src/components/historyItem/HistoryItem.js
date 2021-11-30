import styles from './historyItem.module.css';

const HistoryItem = ({text, amount}) => {
  const isAmountPositive = amount > 0;
  
  return (
    <li className={styles.item}>
      <div className={styles.wrapper}>
        <div className={styles.text}>{text}</div>
        <div className={`${styles.count} ${isAmountPositive ? styles.count_green : styles.count_red}`}>{isAmountPositive ? `+${amount} $` : `${amount} $`}</div>
      </div>
    </li>
  );
};

export default HistoryItem;