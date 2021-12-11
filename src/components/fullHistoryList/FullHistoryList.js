import styles from './fullHistoryList.module.css';
import HistoryItem from '../historyItem/HistoryItem';

const FullHistoryList = ({setIsOpened, items}) => {
  let elementsList = [];

  for(let item in items) {
    const newElem =
      <ul className={styles.item}>
        <div className={styles.date}>{item}</div>
        <ul className={styles.list}>
          {items[item].map(({id, ...props}) => <HistoryItem key={id} {...props}/>)}
        </ul>
      </ul>;
      
    elementsList.push(newElem);
  }

  elementsList.reverse();

  return (
    <div className={styles.wrapper}>
      <button className={styles.close} onClick={() => setIsOpened(false)}>Close</button>
      <div className={styles.items}>
        {elementsList}
      </div>
    </div>
  );
};

export default FullHistoryList;