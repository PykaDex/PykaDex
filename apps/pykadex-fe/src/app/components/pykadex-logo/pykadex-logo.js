import styles from './pykadex-logo.module.scss';
export function PykadexLogo(props) {
  return (
    <div className={styles['container']}>
      <img src="../../../assets/images/pykadex.png"></img>

      <p>Scroll</p>
      <img
        src="../../../assets/images/arrow.png"
        className={styles.arrow}
        alt="arrow"
      />
    </div>
  );
}
export default PykadexLogo;
