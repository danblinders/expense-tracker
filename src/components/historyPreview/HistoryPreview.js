import { useState } from 'react';
import styles from './historyPreview.module.css';
import Spinner from '../spinner/Spinner';
import HistoryItem from '../historyItem/HistoryItem';
import FullHistoryList from '../fullHistoryList/FullHistoryList';

const HistoryList = ({items}) => {
  const [isFullHistoryOpened, setIsFullHistoryOpened] = useState(false);
  let elementsList = [];

  if (items) {
    for (let i = items.length - 1; i >= 0; i--) {
      if (i < items.length - 3) {
        break;
      }
      
      const {id, ...props} = items[i];

      const historyElement = <HistoryItem key={id} {...props}/>;

      elementsList.push(historyElement);
    }

    elementsList.reverse();
  } else {
    elementsList = null;
  }

  return (
    <div className={styles.list}>
      <h2 className={styles.subtitle}>History</h2>
      {!items ? <Spinner/> : <View itemsList={elementsList}/>}
      {items?.length > 3 ? <button onClick={() => {setIsFullHistoryOpened(true);}}>Open full History</button> : null}
      {isFullHistoryOpened ? <FullHistoryList setIsOpened={setIsFullHistoryOpened} items={items}/> : null}
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