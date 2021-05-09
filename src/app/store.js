import { configureStore } from '@reduxjs/toolkit';
import movieTitleReducer from '../features/movie-search/movieSearchSlice';

export const store = configureStore({
  reducer: {
    movieTitle: movieTitleReducer,
  },
})
