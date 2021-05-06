import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {
  getMovieTitles,
  nominate,
  withdraw
} from '../movie-search/movieSearchSlice';
import './movieContainer.css'
import image from '../../no-image.png';

export function MovieContainer(){
  const dispatch = useDispatch();
  const movieTitles = useSelector(state => state.movieTitle.titles)
  const nominees = useSelector(state => state.movieTitle.nominees)

  return movieTitles !== null ? movieTitles.map((movie, index) => {

    return (
      <div className="movie-container">

        <img src={movie.Poster !== 'N/A' ? movie.Poster : image} alt={movie.Title + ' poster'}/>
        <div className="title">
          {movie.Title}
        </div>
        <div className="year">
          {movie.Year}
        </div>
        {
          nominees.map(movie => movie.imdbID).includes(movie.imdbID)
          ? <div className="nominated">Nominated</div>
           : <button disabled={nominees.length >= 5} className="nom-button" onClick={() => dispatch(nominate(movie))}>Nominate</button>
        }


      </div>
    )
  }) : null
}
