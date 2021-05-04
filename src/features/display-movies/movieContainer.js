import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {
  getMovieTitles,
  nominate,
  withdraw
} from '../movie-search/movieSearchSlice';
import './movieContainer.css'

export function MovieContainer(){
  const dispatch = useDispatch();
  const movieTitles = useSelector(state => state.movieTitle.titles)
  const nominees = useSelector(state => state.movieTitle.nominees)

  return movieTitles !== null ? movieTitles.map((movie, index) => {
    return (
      <div className="container">
        <img src={movie.Poster}/>
        <div className="title">
          {movie.Title}
        </div>
        <div className="year">
          {movie.Year}
        </div>
        <button disabled={nominees.map(movie => movie.imdbID).includes(movie.imdbID)} onClick={() => dispatch(nominate(movie))}>Nominate</button>
      </div>
    )
  }) : null
}
