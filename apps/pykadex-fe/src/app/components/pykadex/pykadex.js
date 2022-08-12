import styles from './pykadex.module.scss';
import { Link } from 'react-router-dom';
import { useSelector, useDispatch } from 'react-redux';

/* eslint-disable */
import {
  clearFileName,
  toggleIsSent,
  toggleIsUploaded,
} from 'apps/pykadex-fe/src/slices/uploadData';
/* eslint-enable */

import {
  PykadexLogo,
  UploadDisplay,
  Upload,
  Loading,
  Return,
  Name,
  Docs,
  Cancel,
} from '../index';

export function Pykadex(props) {
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
      <div className={styles.logoContainer}>
        <PykadexLogo />
      </div>

      <div className={styles.mainContainer}>
        <div className={styles.MainNav}>
          {upload.isLoaded ? <Name /> : null}

          {!upload.isLoaded && !upload.isUploaded ? <Docs /> : null}

          {(upload.isUploaded && upload.isLoaded) ||
          (upload.isUploaded && upload.isSent) ? (
            <Cancel />
          ) : null}
        </div>

        <div className={styles.loadReturn}>
          {!upload.isSent && !upload.isLoaded ? <UploadDisplay /> : null}
          {upload.isSent && !upload.isLoaded ? <Loading /> : null}
          {upload.isSent && upload.isLoaded ? <Return /> : null}
        </div>
        {upload.isSent && upload.isUploaded ? null : <Upload />}
      </div>
    </div>
  );
}
export default Pykadex;
