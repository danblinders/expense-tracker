import styles from './historyItem.module.css';

const HistoryItem = ({text, amount}) => {
  const isAmountPositive = amount > 0;

  let itemClassNames = 'history-item';

  itemClassNames += isAmountPositive ? ' history-item__border_green' : ' history-item__border_green';
  
  return (
    <li className={itemClassNames}>
      <div className="history-item__wrapper">
        <div className="history-item__text">{text}</div>
        <div className="history-item__count">{isAmountPositive ? `+${amount}` : amount}</div>
      </div>
    </li>
  );
};

export default HistoryItem;