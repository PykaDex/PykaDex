import styles from './loading.module.scss';
import { useEffect, useRef } from 'react';
import gsap from 'gsap';

import useLoadingHook from '../../hooks/use-loading-hook/use-loading-hook';
import { LoadingProps, Iimages} from "./interfaces/interfaces"



export function Loading(props: LoadingProps) {
  const isLoading = useLoadingHook()
  const itemsRef = useRef<HTMLDivElement[] | null[]>([]);
  
  const el = useRef();
  const q = gsap.utils.selector(el);
  const tl = useRef();

  useEffect(() => {
  itemsRef.current.map((item, index) => {

    gsap.to(itemsRef.current[index], 2, {morphSVG: {shape: itemsRef.current[index], shapeIndex: "auto" }});
  });

      
  }, [isLoading.images]);


 


  return (
    <div className={styles['container']}>
        {
          isLoading.images?.map((item: Iimages, index: number) => {
            return <img key={item.id} ref={el => itemsRef.current[index] = el} src={item.src} alt={item.description} ></img>
          })
        }
    </div>
  );
}

export default Loading;
