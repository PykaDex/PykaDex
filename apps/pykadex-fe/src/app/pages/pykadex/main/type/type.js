import styles from './type.module.scss';

import { useSelector } from 'react-redux';

export function Type(props) {
  const data = useSelector((state) => state.returnData);

  return (
    <div className={styles['container']}>
      <p>Type</p>
      <div className={styles.typeContainer}>
        {data.type.map((element, x) => {
          return (
            <div className={`${styles[element]} ${styles.tag}`} key={x}>
              {element}
            </div>
          );
        })}
      </div>
      <p>Weakness</p>
      <div className={styles.typeContainer}>
        {data.weakness.map((element, x) => {
          return (
            <div className={`${styles[element]} ${styles.tag}`} key={x}>
              {element}
            </div>
          );
        })}
      </div>
    </div>
  );
}
export default Type;
