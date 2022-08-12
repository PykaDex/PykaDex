import styles from './upload.module.scss';

import { useDispatch } from 'react-redux';

/* eslint-disable */
import {
  updateFileName,
  clearFileName,
  toggleIsSent,
  toggleIsUploaded,
} from 'apps/pykadex-fe/src/slices/uploadData';
/* eslint-enable */
import { useState } from 'react';

export function Upload(props) {
  const dispatch = useDispatch();

  const [image, setImage] = useState();

  const clearForm = (event) => {
    event.preventDefault();
    document.getElementById('form').reset();
    dispatch(clearFileName());
  };

  const dispatchUpload = (fileName) => {
    dispatch(updateFileName(fileName));
    dispatch(toggleIsUploaded(true));
  };

  const dispatchSubmit = (event) => {
    event.preventDefault(event);
    dispatch(toggleIsSent(true));
  };

  return (
    <div className={styles['container']}>
      <form className={styles.form} id="form">
        <input
          className={styles.upload}
          type="file"
          accept="image/*"
          id="imageUpload"
          onChange={(e) => {
            dispatchUpload(e.target.files[0].name);
          }}
        ></input>

        <div className={styles.ctnContainer}>
          <label className={styles.ctnLeft} htmlFor="imageUpload">
            Select file
          </label>
          <button
            className={styles.ctnRight}
            onClick={(event) => clearForm(event)}
          >
            clear
          </button>
        </div>

        <button
          className={styles.submit}
          onClick={(event) => dispatchSubmit(event)}
        >
          Submit
        </button>
      </form>
    </div>
  );
}
export default Upload;
