import { useState } from 'react';
import styles from './historyPreview.module.css';
import Spinner from '../spinner/Spinner';
import HistoryItem from '../historyItem/HistoryItem';
import FullHistoryList from '../fullHistoryList/FullHistoryList';

const HistoryPreview = ({items}) => {
  const [isFullHistoryOpened, setIsFullHistoryOpened] = useState(false);

  let elementsList = [];
  let isFullHistoryBtnHidden = true;

  if (items) {
    const reversedHistoryDates = Object.keys(items).reverse();

    for (let date of reversedHistoryDates) {
      if (elementsList.length >= 3) {
        isFullHistoryBtnHidden = false;
        break;
      }
      for (let i = items[date].length - 1; i >= 0; i--) {
        if (elementsList.length >= 3) {
          isFullHistoryBtnHidden = false;
          break;
        }
        
        const {id, ...props} = items[date][i];
  
        const historyElement = <HistoryItem key={id} {...props}/>;
  
        elementsList.push(historyElement);
      }
    }
    elementsList.reverse();
  } else {
    elementsList = null;
  }

  return (
    <div className={styles.list}>
      <div className={styles.top}>
        <h2 className={styles.subtitle}>History</h2>
        {isFullHistoryBtnHidden ? null : <button className={styles['full-btn']} onClick={() => {setIsFullHistoryOpened(true);}}>Open full History</button>}
      </div>
      {!items ? <Spinner/> : <View itemsList={elementsList}/>}
      {isFullHistoryOpened ?
        <div className={styles['full-list']}>
          <FullHistoryList setIsOpened={setIsFullHistoryOpened} items={items}/>
        </div>
        : null}
    </div>
  );
};

const View = ({itemsList}) => {
  return (
    <ul className={styles.items}>
      {itemsList?.length > 0 ? itemsList : 'Ho history'}
    </ul>
  );
};

export default HistoryPreview;