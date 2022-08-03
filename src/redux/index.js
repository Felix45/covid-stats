import { configureStore } from '@reduxjs/toolkit';
import statsReducer from './slices/covidSlice';
import countriesReducer from './slices/countriesSlice';
import vaccinesReducer from './slices/vaccineSlice';
import navReducer from './slices/navbarSlice';

const reducer = {
  stats: statsReducer,
  countries: countriesReducer,
  vaccines: vaccinesReducer,
  title: navReducer,
};

const store = (preloadedState) => configureStore({ reducer, preloadedState });

export default store;
