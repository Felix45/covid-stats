import { configureStore } from '@reduxjs/toolkit';
import statsReducer from './slices/covidSlice';
import countriesReducer from './slices/countriesSlice';

const reducer = {
  stats: statsReducer,
  countries: countriesReducer,
};

const store = configureStore({ reducer });

export default store;
