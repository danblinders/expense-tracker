import styles from './historyList.module.css';
import HistoryItem from '../historyItem/HistoryItem';

const HistoryList = ({items}) => {
  const listItems = items.map(item => (
    <HistoryItem key={item.id} text={item.text} amount={item.amount}/>
  ));

  return (
    <div className="history-list">
      <h2 className="history-list__subtitle">History</h2>
      <ul className="history-list__items">
        {listItems}
      </ul>
    </div>
  );
};

export default HistoryList;