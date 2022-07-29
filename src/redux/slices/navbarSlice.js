import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import fetchTitles from '../../services/navbarService';

const initialState = {
  isLoading: false,
  isFaild: false,
  title: '',
};

export const fetchTitleThunk = createAsyncThunk(
  'navbar/fetchTitle',
  async (data) => {
    const result = await fetchTitles(data);
    return result;
  },
);

const navSlice = createSlice({
  name: 'navbar',
  initialState,
  extraReducers: {
    [fetchTitleThunk.fulfilled]: (state, action) => {
      state.isLoading = false;
      state.title = action.payload;
    },
    [fetchTitleThunk.pending]: (state) => { state.isLoading = true; },
    [fetchTitleThunk.rejected]: (state) => { state.isFaild = true; },
  },
});

export default navSlice.reducer;
