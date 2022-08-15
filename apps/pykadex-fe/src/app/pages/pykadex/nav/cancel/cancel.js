import styles from './cancel.module.scss';

import { useDispatch } from 'react-redux';

/* eslint-disable */
import {
  clearFileName,
  toggleIsSent,
  toggleIsUploaded,
  toggleIsLoaded,
} from 'apps/pykadex-fe/src/slices/uploadSlice';

import { resetReturnData } from 'apps/pykadex-fe/src/slices/returnDataSlice';
/* eslint-enable */

import { fetchContext } from '../../../../contexts/use-fetch-data/fetch-data-context';
import { useContext } from 'react';

export function Cancel(props) {
  const dispatch = useDispatch();
  const { cancelSubmission } = useContext(fetchContext);

  const dispatchCancel = (event) => {
    event.preventDefault(event);
    cancelSubmission();

    dispatch(clearFileName());
    dispatch(toggleIsSent(false));
    dispatch(toggleIsUploaded(false));
    dispatch(toggleIsLoaded(false));
    dispatch(resetReturnData());
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
        Clear
      </button>
    </div>
  );
}
export default Cancel;
