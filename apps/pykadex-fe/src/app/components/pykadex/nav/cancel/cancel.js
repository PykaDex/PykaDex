import styles from './cancel.module.scss';
import { useSelector, useDispatch } from 'react-redux';
/* eslint-disable */
import {
  clearFileName,
  toggleIsSent,
  toggleIsUploaded,
} from 'apps/pykadex-fe/src/slices/uploadData';
/* eslint-enable */

export function Cancel(props) {
  const dispatch = useDispatch();
  const upload = useSelector((state) => state.uploadData);

  const dispatchCancel = (event) => {
    event.preventDefault(event);
    dispatch(clearFileName());
    dispatch(toggleIsSent(false));
    dispatch(toggleIsUploaded(false));
  };
  return (
    <div className={styles['container']}>
      <button
        className={styles.rightNav}
        id={styles.clear}
        onClick={(event) => {
          dispatchCancel(event);
        }}
      >
        cancel
      </button>
    </div>
  );
}
export default Cancel;
