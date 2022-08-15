import styles from './return.module.scss';

import { useSelector } from 'react-redux';

export function Return(props) {
  const data = useSelector((state) => state.returnData);

  return (
    <div className={styles['container']}>
      <img src={'http://localhost:3333' + data.url} alt={data.name} />
    </div>
  );
}
export default Return;
