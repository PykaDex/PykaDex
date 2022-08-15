import styles from './upload.module.scss';

import { useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

/* eslint-disable */
import {
  updateFileName,
  clearFileName,
  toggleIsSent,
  toggleIsUploaded,
} from 'apps/pykadex-fe/src/slices/uploadSlice';
/* eslint-enable */

export function Upload(props) {
  const dispatch = useDispatch();
  const upload = useSelector((state) => state.uploadData);
  const [file, setFile] = useState(null);

  const clearForm = (event) => {
    event.preventDefault();
    document.getElementById('form').reset();
    dispatch(clearFileName());
  };

  const dispatchUpload = (file) => {
    setFile(file);
    dispatch(updateFileName(file.name));
    dispatch(toggleIsUploaded(true));
  };

  const dispatchSubmit = (event) => {
    event.preventDefault(event);
    if (!upload.fileName) {
      return;
    }

    const formData = new FormData();
    formData.append('image', file);
    fetch('http://localhost:3333/pykadex', {
      method: 'POST',
      body: formData,
    })
      .then((response) => response.json())
      .then((data) => {
        console.log(data);
      });

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
            dispatchUpload(e.target.files[0]);
          }}
        ></input>

        <div className={styles.ctnContainer}>
          <label
            className={styles.ctnLeft}
            htmlFor="imageUpload"
            ref={props.uplaodUpload}
          >
            Select file
          </label>

          <button
            className={styles.ctnRight}
            onClick={(event) => clearForm(event)}
            ref={props.uploadClear}
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
