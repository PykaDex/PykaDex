import styles from './loading.module.scss';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

import useLoadingTransitionHook from '../../hooks/use-loading-transition/use-loading-transition';

export function Loading(props) {
  const LoadingTransition = useLoadingTransitionHook();

  function classAllocater(index) {
    if (index !== 0) {
      return 'hidden';
    }
  }

  return (
    <div className={styles['container']}>
      {LoadingTransition.images?.map((item, index) => {
        return (
          <img
            key={item.id}
            src={item.src}
            alt={item.description}
            className={classAllocater(index)}
          ></img>
        );
      })}
    </div>
  );
}

export default Loading;
