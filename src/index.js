import React from 'react';
import ReactDOM from 'react-dom/client';
import { App } from 'components/App';
import { AppProvider } from 'components/contexts/AppContext';
import { BrowserRouter } from 'react-router-dom';
import { PersistGate } from 'redux-persist/integration/react';
import { store, persistor } from 'redux/store';
import { Provider } from 'react-redux';

import './index.scss';
import './index.css';

ReactDOM.createRoot(document.getElementById('root')).render(
  // <React.StrictMode>
    <Provider store={store}>
      <PersistGate persistor={persistor}>
        <BrowserRouter basename="/crm_test-react-">
          <AppProvider>
            <App />
          </AppProvider>
        </BrowserRouter>
      </PersistGate>
    </Provider>
  // </React.StrictMode>
);

