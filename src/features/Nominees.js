import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {
  getMovieTitles,
  nominate,
  withdraw
} from './movie-search/movieSearchSlice';
import './nominees.css'

export function Nominees(){
  const nominees = useSelector(state => state.movieTitle.nominees)
  const dispatch = useDispatch();

  return nominees.length > 0 ? nominees.map((movie, index) => {
    return (
      <div className='nom-container'>
        <div className='nom-title'>
          {index + 1}. {movie.Title}
        </div>
        <div className='nom-year'>
          {movie.Year}
        </div>
        <button className='remove-button' onClick={() => dispatch(withdraw(movie))}>Remove</button>
      </div>
    )
  }) : "Please select up to 5 nominees"
}
