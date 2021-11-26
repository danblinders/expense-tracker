import styles from './historyList.module.css';
import Spinner from '../spinner/Spinner';
import HistoryItem from '../historyItem/HistoryItem';

const HistoryList = ({items}) => {

  const elementsList = items?.length > 0 ?
    items.map(item => (
      <HistoryItem key={item.id} text={item.text} amount={item.amount}/>
    ))
    : null;

  return (
    <div className={styles.list}>
      <h2 className={styles.subtitle}>History</h2>
      {!items ? <Spinner/> : <View itemsList={elementsList}/>}
    </div>
  );
};

const View = ({itemsList}) => {
  return (
    <ul className={styles.items}>
      {itemsList ? itemsList : 'Ho history'}
    </ul>
  );
};

export default HistoryList;