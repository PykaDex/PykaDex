import styles from './pykadex-logo.module.scss';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export function PykadexLogo() {
  return (
    <div className={styles['container']}>
      <img src="../../../assets/images/pykadex.png"></img>

      <div className={styles.textContainer}>
        <p>Scroll</p>
        <img
          src="../../../assets/images/arrow.png"
          className={styles.arrow}
          alt="arrow"
        />
      </div>
    </div>
  );
}
export default PykadexLogo;
