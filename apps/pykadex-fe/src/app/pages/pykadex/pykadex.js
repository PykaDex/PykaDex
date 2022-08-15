import styles from './pykadex.module.scss';
import { useSelector } from 'react-redux';

import {
  PykadexLogo,
  UploadDisplay,
  Upload,
  Loading,
  Return,
  Name,
  Docs,
  Cancel,
  Description,
  Type,
  Stats,
} from './barrels/components';

export function Pykadex() {
  const upload = useSelector((state) => state.uploadData);

  return (
    <div className={styles['container']}>
      <section className={styles.logoContainer}>
        <PykadexLogo />
      </section>

      <section className={styles.mainContainer}>
        <div className={styles.MainNav}>
          {upload.isLoaded ? <Name /> : null}

          {!upload.isSent || !upload.isLoaded ? <Docs /> : null}

          {(upload.isUploaded && upload.isLoaded) ||
          (upload.isUploaded && upload.isSent) ? (
            <Cancel />
          ) : null}
        </div>

        <div className={styles.mainContent}>
          <div className={styles.UploadReturn}>
            {!upload.isSent && !upload.isLoaded ? <UploadDisplay /> : null}
            {upload.isSent && !upload.isLoaded ? <Loading /> : null}

            {upload.isSent && upload.isLoaded ? <Return /> : null}
          </div>
          <div className={styles.desTyp}>
            {upload.isSent && upload.isLoaded ? <Description /> : null}
            {upload.isSent && upload.isLoaded ? <Type /> : null}
          </div>
          {upload.isSent && upload.isLoaded ? <Stats /> : null}
        </div>

        {upload.isSent && upload.isUploaded ? null : <Upload />}
      </section>
    </div>
  );
}
export default Pykadex;
