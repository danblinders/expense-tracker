import styles from './historyItem.module.css';

const HistoryItem = ({text, amount}) => {
  const isAmountPositive = amount > 0;

  let itemClassNames = 'history-item';

  itemClassNames += isAmountPositive ? ' history-item__border_green' : ' history-item__border_green';
  
  return (
    <li className={styles.item}>
      <div className={styles.wrapper}>
        <div className={styles.text}>{text}</div>
        <div className={styles.count}>{isAmountPositive ? `+${amount} $` : `${amount} $`}</div>
      </div>
    </li>
  );
};

export default HistoryItem;