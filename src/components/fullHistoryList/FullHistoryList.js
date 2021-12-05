import './fullHistoryList.module.css';
import HistoryItem from '../historyItem/HistoryItem';

const FullHistoryList = ({setIsOpened, items}) => {
  let elementsList = [];

  for(let item in items) {
    const newElem =
      <div className="item">
        <div className="item-date">{item}</div>
        {items[item].map(({id, ...props}) => <HistoryItem key={id} {...props}/>)}
      </div>;
      
    elementsList.push(newElem);
  }

  return (
    <div className="full-history">
      <button className="full-history__close" onClick={() => setIsOpened(false)}>Close</button>
      <ul className="full-history__list">
        {elementsList}
      </ul>
    </div>
  );
};

export default FullHistoryList;