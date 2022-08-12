import { StrictMode } from 'react';
import { Provider } from 'react-redux';
import * as ReactDOM from 'react-dom/client';

import App from './app/app';
import { store } from './store';

const root = ReactDOM.createRoot(document.getElementById('root'));

root.render(
  <StrictMode>
    <Provider store={store}>
      <App />
    </Provider>
  </StrictMode>
);
