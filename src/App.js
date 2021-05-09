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
      <div className="header">
        <h1 className="shoppies-title">The Shoppies</h1>
      </div>
      <div className="layout">
          <div className="search-container">
            Search Movies to Nominate
            <MovieSearch/>
          </div>
            <div className='nominees-container'><Nominees/></div>

        <div className="movies-container">
          <MovieContainer/>
        </div>
      </div>
    </div>
  );
}

export default App;
