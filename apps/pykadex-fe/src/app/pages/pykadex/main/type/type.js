import styles from './type.module.scss';

import { useSelector } from 'react-redux';

export function Type(props) {
  const data = useSelector((state) => state.returnData);

  return (
    <div className={styles['container']}>
      {data.type.map((element, x) => {
        return (
          <div className={styles[element]} key={x}>
            {element}
          </div>
        );
      })}
    </div>
  );
}
export default Type;
