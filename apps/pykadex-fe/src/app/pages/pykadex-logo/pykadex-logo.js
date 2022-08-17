import styles from './pykadex-logo.module.scss';
import { useRef, useEffect } from 'react';
import gsap from 'gsap';

export function PykadexLogo() {
  const logo = useRef();
  const logoText = useRef();

  useEffect(() => {
    gsap.fromTo(
      logo.current,
      { autoAlpha: 0 },
      { autoAlpha: 1, duration: 5 },
      1
    );
    gsap.fromTo(
      logo.current,
      { autoAlpha: 0 },
      { autoAlpha: 1, duration: 4 },
      1
    );
    gsap.fromTo(
      logoText.current,
      { autoAlpha: 0 },
      { autoAlpha: 1, duration: 4 },
      3
    );
    gsap.fromTo(logoText.current, { y: 500 }, { y: 0, duration: 1 }, 3);
  });

  return (
    <div className={styles['container']}>
      <img
        src="../../../assets/images/pykadex.png"
        ref={logo}
        alt="pykadex"
      ></img>

      <div className={styles.textContainer} ref={logoText}>
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
