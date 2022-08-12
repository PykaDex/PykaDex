import { useState, useEffect } from 'react';

export function useLoadingTransitionHook() {
  const [loadingTransition, setLoadingTransition] = useState([]);

  const fetchData = async () => {
    const res = await fetch('http://localhost:3333/pykadex');
    const json = await res.json();
    setLoadingTransition(json);
  };

  useEffect(() => {
    fetchData();
    console.log(loadingTransition);
  }, []);

  return loadingTransition;
}

export default useLoadingTransitionHook;
