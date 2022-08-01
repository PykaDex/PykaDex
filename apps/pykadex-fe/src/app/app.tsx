import { useEffect, useState } from 'react';

import Loading from '../components/loading/loading';
import Pykadex from '../components/pykadex/pykadex';

export function App() {
  const [loading, setLoading] = useState(false)

  useEffect(() => {
    setLoading(true)
    // setTimeout(() => {
    //   setLoading(false)
    // }, 3000)
  }, [])

  return (
    <div>
     {
      loading ?
        <Loading />
      :
        <Pykadex/>
     }
    </div>
  );
}

export default App;
