import styles from './app.module.scss';
import Pykadex from './components/pykadex/pykadex';

export function App() {
  return (
    <div className={styles['container']}>
      <Pykadex />
    </div>
  );
}

export default App;
