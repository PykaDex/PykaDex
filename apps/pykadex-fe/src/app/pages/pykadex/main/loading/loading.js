import styles from './loading.module.scss';

import { useLoadingTransitionHook } from '../../barrels/hooks';

export function Loading() {
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
