import { useState } from 'react'
import { useSelector, useDispatch } from 'react-redux';
import {
  getMovieTitles,
} from './movieSearchSlice';
import '../display-movies/movieContainer.css'
export function MovieSearch(){
  const movieTitles = useSelector(state => state.movieTitle.titles)
  const dispatch = useDispatch();
  const [movieTitle, setMovieTitle] = useState('');

  function onSubmit(e){
    e.preventDefault();
    dispatch(getMovieTitles(movieTitle))

  }
  return(
    <div>
      <input type="text" onChange={(e) => dispatch(getMovieTitles(e.target.value))}/>
    </div>
  )
}
