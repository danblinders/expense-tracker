import './fullHistoryList.module.css';
import HistoryItem from '../historyItem/HistoryItem';

const FullHistoryList = ({setIsOpened, items}) => {
  const elementsList = items?.map(({id, ...props}) => (
    <HistoryItem key={id} {...props}/>
  ));

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