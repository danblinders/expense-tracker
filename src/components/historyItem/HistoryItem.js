import styles from './historyItem.module.css';

const HistoryItem = ({text, amount}) => {
  return (
    <li className="history-item">
      <div className="history-item__wrapper">
        <div className="history-item__text">{text}</div>
        <div className="history-item__count">{amount}</div>
      </div>
    </li>
  );
};

export default HistoryItem;