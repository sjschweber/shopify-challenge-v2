import React, {useState} from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import {MovieContainer} from './features/display-movies/movieContainer.js'
import { MovieSearch } from './features/movie-search/MovieSearch'
import { Nominees } from './features/Nominees.js'
import './App.css';
import { GiTrophyCup } from "react-icons/gi";
import { useSelector, useDispatch } from 'react-redux';


function App() {
  const [toggleNominees, setToggleNominees] = useState(false)
  const nominees = useSelector(state => state.movieTitle.nominees)

  function handleToggle(e){
    e.preventDefault();
    setToggleNominees(prev => !prev)
  }
  return (
    <div className="App">
      {nominees.length >= 5 ? <div className="banner">Thank you for selecting 5 nominees!</div> : null}
      <h1>The Shoppies</h1>
      <div className="search-container">
        <MovieSearch/>
      </div>

      <button className="trophy-button" onClick={handleToggle}>{toggleNominees ? "Hide nominees" : "Show Nominees"}</button>
        {toggleNominees ? <div className='nominees-container'><Nominees/></div> : null}
      <div className="movies-container">
        <MovieContainer/>
      </div>

    </div>
  );
}

export default App;
