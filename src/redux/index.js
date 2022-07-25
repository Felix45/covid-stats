import { configureStore } from '@reduxjs/toolkit';
import statsReducer from './slices/covidSlice';

const reducer = {
  stats: statsReducer,
};

const store = configureStore({ reducer });

export default store;
