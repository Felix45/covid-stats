import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import fetchVaccinated from '../../services/vaccinesService';

const initialState = {
  isLoading: false,
  isFaild: false,
  vaccines: [],
};

export const fetchVaccinatedThunk = createAsyncThunk(
  'vaccines/fetchVaccinated',
  async () => {
    const { data } = await fetchVaccinated();
    return data;
  },
);

const vaccinesSlice = createSlice({
  name: 'vaccines',
  initialState,
  extraReducers: {
    [fetchVaccinatedThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.vaccines = action.payload;
    },
    [fetchVaccinatedThunk.pending]: (state) => { state.isLoading = true; },
    [fetchVaccinatedThunk.rejected]: (state) => { state.isFaild = true; },
  },
});

export default vaccinesSlice.reducer;
