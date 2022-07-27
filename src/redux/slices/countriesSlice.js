import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import fetchCountries from '../../services/countryService';

const initialState = {
  isLoading: false,
  isFaild: false,
  countries: [],
};

export const fetchCountriesThunk = createAsyncThunk(
  'countries/fetchCountries',
  async () => {
    const { data } = await fetchCountries();
    return data;
  },
);

const countriesSlice = createSlice({
  name: 'countries',
  initialState,
  extraReducers: {
    [fetchCountriesThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.countries = action.payload;
    },
    [fetchCountriesThunk.pending]: (state) => { state.isLoading = true; },
    [fetchCountriesThunk.rejected]: (state) => { state.isFaild = true; },
  },
});

export default countriesSlice.reducer;
