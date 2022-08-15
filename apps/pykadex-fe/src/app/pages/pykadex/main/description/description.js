import styles from './description.module.scss';

import { useSelector } from 'react-redux';

export function Description() {
  const data = useSelector((state) => state.returnData);

  return (
    <div className={styles['container']}>
      <p>{data.description}</p>
    </div>
  );
}
export default Description;
