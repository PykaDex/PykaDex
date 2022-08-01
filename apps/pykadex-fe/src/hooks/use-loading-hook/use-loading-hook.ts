import { useState, useEffect } from 'react';
import { Iloading, loadingInit } from '../../components/loading/interfaces/interfaces';

// eslint-disable-next-line @typescript-eslint/no-empty-interface
export interface UseLoadingHook {
  loading: Iloading;
  
}

export function useLoadingHook(): Iloading {
  const [loading, setLoading] = useState<Iloading>(loadingInit)

  const fetchData = async () => {
    const res = await fetch(
      "http://localhost:3333/pykadex"
    );
    const json = await res.json()
    setLoading(json)
  }

  useEffect(() => {
    fetchData();
    console.log(loading)
  }, [])

  return loading
}

export default useLoadingHook;
