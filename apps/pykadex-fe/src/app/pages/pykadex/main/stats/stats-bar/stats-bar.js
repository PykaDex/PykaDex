import styles from './stats-bar.module.scss';

export function StatsBar({ statsVal }) {
  const { type, score, classAssign } = statsVal;

  return (
    <div className={styles.container}>
      <div className={styles.barContainer}>
        {Array.from({ length: score[1] }, (_, index) => {
          return <div className={styles.blankBar} key={index}></div>;
        })}

        {Array.from({ length: score[0] }, (_, index) => {
          return (
            <div
              className={`${styles.valBar} ${styles[classAssign]}`}
              key={index}
            ></div>
          );
        })}
      </div>
      <p>{type}</p>
    </div>
  );
}
export default StatsBar;
