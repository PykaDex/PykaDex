import styles from './pykadex.module.scss';

/* eslint-disable-next-line */
export interface PykadexProps {}

export function Pykadex(props: PykadexProps) {
  return (
    <div className={styles['container']}>
      <h1>Welcome to Pykadex!</h1>
    </div>
  );
}

export default Pykadex;
