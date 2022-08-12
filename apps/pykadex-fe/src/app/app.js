import styles from './app.module.scss';

import { BrowserRouter as Router, Routes, Route } from 'react-router-dom';

import Pykadex from './components/pykadex/pykadex';
import Documentation from './components/documentation/documentation';

export function App() {
  return (
    <Router>
      <div className={styles['container']}>
        <Routes>
          <Route path="/" element={<Pykadex />} />
          <Route path="/docs" element={<Documentation />} />
        </Routes>
      </div>
    </Router>
  );
}

export default App;
