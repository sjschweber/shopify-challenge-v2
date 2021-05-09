import { createAsyncThunk, createSlice } from '@reduxjs/toolkit';
import { fetchMovieTitles } from './OMDbAPI.js';

const initialState = {
  titles: null,
  nominees: [],
};

// The function below is called a thunk and allows us to perform async logic. It
// can be dispatched like a regular action: `dispatch(incrementAsync(10))`. This
// will call the thunk with the `dispatch` function as the first argument. Async
// code can then be executed and other actions can be dispatched. Thunks are
// typically used to make async requests.
export const getMovieTitles = createAsyncThunk(
  'movieTitles/fetchMovieTitles',
  async (title) => {
    const response = await fetchMovieTitles(title);
    // The value we return becomes the `fulfilled` action payload
    let movies = response.data.Search.filter(item => item.Type === 'movie')
    return movies;
  }
);



export const movieTitleSlice = createSlice({
  name: 'titles',
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
      state.nominees = state.nominees.filter(nominee => {
        return nominee.imdbID !== action.payload.imdbID
      });
    }

  },
  // The `extraReducers` field lets the slice handle actions defined elsewhere,
  // including actions generated by createAsyncThunk or in other slices.
  extraReducers: (builder) => {
    builder
      .addCase(getMovieTitles.pending, (state) => {
        state.status = 'loading';
      })
      .addCase(getMovieTitles.fulfilled, (state, action) => {
        state.status = 'idle';
        state.titles = action.payload;
      });
  },
});


export const { nominate, withdraw } = movieTitleSlice.actions;

export default movieTitleSlice.reducer;
