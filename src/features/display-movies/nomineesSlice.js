import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';

const initialState = {
  nominees: [],
};


export const nomineesSlice = createSlice({
  name: 'nominees',
  initialState,
  // The `reducers` field lets us define reducers and generate associated actions
  reducers: {
    nominate: (state, action) => {
      // Redux Toolkit allows us to write "mutating" logic in reducers. It
      // doesn't actually mutate the state because it uses the Immer library,
      // which detects changes to a "draft state" and produces a brand new
      // immutable state based off those changes
      state.nominees.push(action.payload);
    },
    withdraw: (state, action) => {
      state.nominees.filter(nominee => nominee.Title !== action.payload.Title);
    }
  },

});

export const { nominate, withdraw } = nomineesSlice.actions;

export const selectCount = (state) => state.nominees;

export default nomineesSlice.reducer;
