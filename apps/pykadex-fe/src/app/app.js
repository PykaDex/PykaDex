import styles from './app.module.scss';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Pykadex from './pages/pykadex/pykadex';
import Documentation from './pages/documentation/documentation';
import { FetchProvider } from './contexts/use-fetch-data/fetch-data-context';

export function App() {
  return (
    <Router>
      <FetchProvider>
        <div className={styles['container']}>
          <Routes>
            <Route path="/" element={<Pykadex />} />
            <Route path="/docs" element={<Documentation />} />
          </Routes>
        </div>
      </FetchProvider>
    </Router>
  );
}

export default App;
