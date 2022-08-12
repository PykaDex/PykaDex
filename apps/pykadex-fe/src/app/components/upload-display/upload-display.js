import styles from './upload-display.module.scss';

import { useSelector } from 'react-redux';

export function UploadDisplay() {
  const upload = useSelector((state) => state.uploadData);

  return (
    <div className={styles['container']}>
      <div className={styles.crossElement}>
        {upload.fileName ? (
          <p className={styles.dataName}>{upload.fileName}</p>
        ) : (
          <p>upload image</p>
        )}
      </div>
    </div>
  );
}
export default UploadDisplay;
