import styles from './loading.module.scss';

import useLoadingHook from '../../hooks/use-loading-hook/use-loading-hook';
import { LoadingProps, Iimages} from "./interfaces/interfaces"


export function Loading(props: LoadingProps) {
 const isLoading = useLoadingHook()

  return (
    <div className={styles['container']}>
        {
          isLoading.images?.map((item: Iimages) => {
            return <img key={item.id} src={item.src} alt={item.description}></img>
          })
        }
    </div>
  );
}

export default Loading;
