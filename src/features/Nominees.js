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

  return nominees.map(movie => {
    return (
      <div className='nom-container'>
        <div className='nom-title'>
          {movie.Title}
        </div>
        <div className='nom-year'>
          {movie.Year}
        </div>
        <button className='nom-button' onClick={() => dispatch(withdraw(movie))}>Remove</button>
      </div>
    )
  })
}
