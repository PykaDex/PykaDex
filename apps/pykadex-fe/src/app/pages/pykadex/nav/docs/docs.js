import styles from './docs.module.scss';
import { useNavigate } from 'react-router-dom';
import { useDispatch, useSelector } from 'react-redux';
import { useRef } from 'react';

/* eslint-disable */
import { toggleDocs } from 'apps/pykadex-fe/src/slices/transitionSlice';
/* eslint-enable */

export function Docs(props) {
  const navigate = useNavigate();
  const dispatch = useDispatch();
  const transition = useSelector((state) => state.transition);

  const docsHandel = (event) => {
    event.preventDefault();
    setTimeout(() => {
      navigate('/docs');
    }, 2000);
  };

  return (
    <div className={styles['container']}>
      <button
        onClick={(event) => docsHandel(event)}
        className={styles.rightNav}
        id={styles.docs}
      >
        Docs
      </button>
    </div>
  );
}
export default Docs;
