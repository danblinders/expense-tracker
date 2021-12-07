import './fullHistoryList.module.css';
import HistoryItem from '../historyItem/HistoryItem';

const FullHistoryList = ({setIsOpened, items}) => {
  let elementsList = [];

  for(let item in items) {
    const newElem =
      <ul className="full-history__list">
        <div className="full-history-date">{item}</div>
        {items[item].map(({id, ...props}) => <HistoryItem key={id} {...props}/>)}
      </ul>;
      
    elementsList.push(newElem);
  }

  elementsList.reverse();

  return (
    <div className="full-history">
      <button className="full-history__close" onClick={() => setIsOpened(false)}>Close</button>
      <div className="full-history__container">
        {elementsList}
      </div>
    </div>
  );
};

export default FullHistoryList;