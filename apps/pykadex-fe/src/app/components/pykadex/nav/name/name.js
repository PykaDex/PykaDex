import styles from './name.module.scss';
export function Name(props) {
  return (
    <div className={styles['container']}>
      <a href="#" className={styles.leftNav}>
        Name
      </a>
    </div>
  );
}
export default Name;
