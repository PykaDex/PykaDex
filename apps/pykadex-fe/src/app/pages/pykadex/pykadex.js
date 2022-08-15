import styles from './pykadex.module.scss';
import { useSelector } from 'react-redux';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

import {
  PykadexLogo,
  UploadDisplay,
  Upload,
  Loading,
  Return,
  Name,
  Docs,
  Cancel,
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

        <div className={styles.UploadReturn}>
          {!upload.isSent && !upload.isLoaded ? <UploadDisplay /> : null}
          {upload.isSent && !upload.isLoaded ? <Loading /> : null}
          {upload.isSent && upload.isLoaded ? <Return /> : null}
        </div>

        {upload.isSent && upload.isUploaded ? null : <Upload />}
      </section>
    </div>
  );
}
export default Pykadex;
