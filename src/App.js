import React from 'react';
import { BrowserRouter, Routes, Route } from 'react-router-dom';
import { Provider } from 'react-redux';
import store from './redux';
import ContinentView from './components/ContinentView';
import '../node_modules/bootstrap/dist/css/bootstrap.min.css';
import CountryView from './components/CountryView';
import NationView from './components/NationView';

function App() {
  return (
    <Provider store={store}>
      <BrowserRouter>
        <Routes>
          <Route exact path="/" element={<ContinentView />} />
          <Route exact path="/continent/:continent" element={<CountryView />} />
          <Route exact path="/country/:nation" element={<NationView />} />
        </Routes>
      </BrowserRouter>
    </Provider>
  );
}

export default App;
