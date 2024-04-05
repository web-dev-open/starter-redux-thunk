import { createSlice } from '@reduxjs/toolkit'; // Add createAsyncThunk to the list of imports

// Add fetchQuote() here

const initialState = {
  quote: '',
  loading: false,
  error: false,
};

const options = {
  name: 'quote',
  initialState,
  reducers: {},
};

const quoteSlice = createSlice(options);

export default quoteSlice.reducer;

export const selectQuote = (state) => state.quote.quote;
export const selectLoading = (state) => state.quote.loading;
export const selectError = (state) => state.quote.error;
