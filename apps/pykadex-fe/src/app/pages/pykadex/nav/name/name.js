import styles from './name.module.scss';

import { useSelector } from 'react-redux';

export function Name(props) {
  const data = useSelector((state) => state.returnData);

  const displayId = (data) => {
    switch (true) {
      case data < 10:
        return '00' + JSON.stringify(data);

      case data < 100:
        return '0' + JSON.stringify(data);

      default:
        return JSON.stringify(data);
    }
  };

  return (
    <div className={styles['container']}>
      <div className={styles.leftNav}>
        {data.name.english ? data.name.english : 'NAME'}
        <div className={styles.id}>{data.id ? displayId(data.id) : '000'}</div>
      </div>
    </div>
  );
}
export default Name;
