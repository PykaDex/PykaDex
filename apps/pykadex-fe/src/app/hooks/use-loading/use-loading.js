import { useState, useEffect } from 'react';

export function useLoadingHook() {
  const [loading, setLoading] = useState([]);

  const fetchData = async () => {
    const res = await fetch('http://localhost:3333/pykadex');
    const json = await res.json();
    setLoading(json);
  };

  useEffect(() => {
    fetchData();
    console.log(loading);
  }, []);

  return loading;
}

export default useLoadingHook;
