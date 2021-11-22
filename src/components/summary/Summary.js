import styles from './summary.module.css';

const Summary = ({balance, income, expense}) => {
  return (
    <div className="summary">
      <div className="summary__balance">
        <h2 className="summary__balance-subtitle">your balance</h2>
        <div className="summary__balance-count">$ {balance}</div>
      </div>
      <div className="summary__details">
        <div className="summary__details-unit">
          <h2 className="summary__details-subtitle">income</h2>
          <div className="summary__details-count">$ {income}</div>
        </div>
        <div className="summary__details-separator"></div>
        <div className="summary__details-unit">
          <h2 className="summary__details-subtitle">expense</h2>
          <div className="summary__details-count">$ {expense}</div>
        </div>
      </div>
    </div>
  );
};

export default Summary;