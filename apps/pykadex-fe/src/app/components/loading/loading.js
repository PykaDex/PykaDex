import styles from './loading.module.scss';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

import useLoadingHook from '../../hooks/use-loading/use-loading';

export function Loading(props) {
  const isLoading = useLoadingHook();

  function classAllocater(index) {
    if (index !== 0) {
      return 'hidden';
    }
  }

  return (
    <div className={styles['container']}>
      {isLoading.images?.map((item, index) => {
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
