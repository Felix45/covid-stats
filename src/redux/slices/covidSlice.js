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

export const { filterCountries } = statsSlice.actions;
export default statsSlice.reducer;
