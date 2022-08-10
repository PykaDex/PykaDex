import styles from './pykadex.module.scss';

import { useState } from 'react';

import PykadexLogo from '../pykadex-logo/pykadex-logo';
import Upload from '../upload/upload';
import Return from '../return/return';

export function Pykadex(props) {
  const [isSent, setIsSent] = useState(false);
  const [isUploading, setIsLoading] = useState();

  return (
    <div className={styles['container']}>
      <div className={styles.logoBackground}>
        <PykadexLogo />
        <p>Scroll</p>
        <img src="../../../assets/images/arrow.png" className={styles.arrow} />
      </div>

      <div className={styles.mainBackground}>
        {isSent ? <Return /> : <Upload />}
      </div>
    </div>
  );
}
export default Pykadex;
