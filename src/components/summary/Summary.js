import styles from './summary.module.css';

const Summary = ({balance, income, expense}) => {
  return (
    <div className={styles.container}>
      <div className={styles.balance}>
        <h2 className={styles.balance__subtitle}>your balance</h2>
        <div className={styles.balance__count}>$ {balance}</div>
      </div>
      <div className={styles.details}>
        <div className={styles.details__unit}>
          <h2 className={styles.details__subtitle_green}>income</h2>
          <div className={styles.details__count}>$ {income}</div>
        </div>
        <div className={styles.details__separator}></div>
        <div className={styles.details__unit}>
          <h2 className={styles.details__subtitle_red}>expense</h2>
          <div className={styles.details__count}>$ {expense}</div>
        </div>
      </div>
    </div>
  );
};

export default Summary;