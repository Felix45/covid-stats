import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import fetchStats from '../../services/statsService';

const initialState = {
  isLoading: false,
  isFaild: false,
  stats: [],
};

export const fetchStatsThunk = createAsyncThunk(
  'stats/fetchStats',
  async () => {
    const { data } = await fetchStats();
    Object.keys(data).map((key) => data[key].All.show = true);
    return data;
  },
);

const statsSlice = createSlice({
  name: 'stats',
  initialState,
  reducers: {
    filterCountries(state, action) {
      state.stats = action.payload;
    },
    searchCountries(state, action) {
      const searchItem = action.payload.toLowerCase();
      const newState = {};
      Object.keys(state.stats).map((stat) => {
        const { country } = state.stats[stat].All;
        newState[country] = { All: { ...state.stats[stat].All, show: false } };

        const regex = new RegExp(searchItem.toLowerCase(), 'g');
        if (country && country.toLowerCase().match(regex)) {
          newState[country] = { All: { ...state.stats[stat].All, show: true } };
        }
        return newState[country];
      });
      state.stats = newState;
    },
  },
  extraReducers: {
    [fetchStatsThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.stats = action.payload;
    },
    [fetchStatsThunk.pending]: (state) => { state.isLoading = true; },
    [fetchStatsThunk.rejected]: (state) => { state.isFaild = true; },
  },
});

export const { filterCountries, searchCountries } = statsSlice.actions;
export default statsSlice.reducer;
