import React from 'react';
import ReactDOM from 'react-dom/client';
import App from './App';
import { Provider } from 'react-redux';
import { setupStore } from './redux/store';
import { unstable_HistoryRouter as HistoryRouter } from 'react-router-dom';
import history from './lib/history';

export const store = setupStore();
console.log(process.env.REACT_APP_API);
const root = ReactDOM.createRoot(document.getElementById('root'));
root.render(
  <React.StrictMode>
    <Provider store={store}>
      <HistoryRouter history={history}>
        <App />
      </HistoryRouter>
    </Provider>
  </React.StrictMode>,
);

