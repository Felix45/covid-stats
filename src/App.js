import React from 'react';
import { Provider } from 'react-redux';
import store from './redux';
import ContinentView from './components/ContinentView';

function App() {
  return (
    <Provider store={store}>
      <ContinentView />
    </Provider>

  );
}

export default App;
