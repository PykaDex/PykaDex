import styles from './docs.module.scss';
import { Link } from 'react-router-dom';

export function Docs(props) {
  return (
    <div className={styles['container']}>
      <Link to="/docs" className={styles.rightNav} id={styles.docs}>
        Docs
      </Link>
    </div>
  );
}
export default Docs;
