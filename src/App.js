import React from 'react';
import { Provider } from 'react-redux';
import store from './redux';
import ContinentView from './components/ContinentView';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';

function App() {
  return (
    <Provider store={store}>
      <ContinentView />
    </Provider>

  );
}

export default App;
