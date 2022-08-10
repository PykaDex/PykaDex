import styles from './pykadex-logo.module.scss';
export function PykadexLogo(props) {
  return (
    <div className={styles['container']}>
      <img src="../../../assets/images/pykadex.png"></img>
    </div>
  );
}
export default PykadexLogo;
