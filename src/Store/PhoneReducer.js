// src/store/phoneSlice.js

import { createSlice, createAsyncThunk } from '@reduxjs/toolkit';
import axios from 'axios';

// Define async thunk for searching phone number
export const searchPhoneNumber = createAsyncThunk(
  'phone/searchPhoneNumber',
  async (phoneNumber, { rejectWithValue }) => {
    try {
      const response = await axios.get(`http://192.168.1.19:83/api/search/${phoneNumber}`);
      return response.data;
    } catch (error) {
      return rejectWithValue(error.response.data);
    }
  }
);

// Initial state
const initialState = {
  data: null,
  loading: false,
  error: null,
};

const phoneSlice = createSlice({
  name: 'phone',
  initialState,
  reducers: {},
  extraReducers: (builder) => {
    builder
      .addCase(searchPhoneNumber.pending, (state) => {
        state.loading = true;
        state.error = null;
      })
      .addCase(searchPhoneNumber.fulfilled, (state, action) => {
        state.loading = false;
        state.data = action.payload;
      })
      .addCase(searchPhoneNumber.rejected, (state, action) => {
        state.loading = false;
        state.error = action.payload;
      });
  },
});

export default phoneSlice.reducer;
