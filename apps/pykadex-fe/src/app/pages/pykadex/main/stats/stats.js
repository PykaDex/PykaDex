import styles from './stats.module.scss';

import { useSelector } from 'react-redux';
import { useEffect } from 'react';

export function Stats(props) {
  const data = useSelector((state) => state.returnData);

  useEffect(() => {
    console.log(data.stats);
  });
  return (
    <div className={styles['container']}>
      <h1>Welcome to Stats!</h1>
    </div>
  );
}
export default Stats;
