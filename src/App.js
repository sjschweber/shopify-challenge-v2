import React, {useState} from 'react';
import logo from './logo.svg';
import { Counter } from './features/counter/Counter';
import {MovieContainer} from './features/display-movies/movieContainer.js'
import { MovieSearch } from './features/movie-search/MovieSearch'
import { Nominees } from './features/Nominees.js'
import './App.css';
import { GiTrophyCup } from "react-icons/gi";

function App() {
  const [toggleNominees, setToggleNominees] = useState(false)

  function handleToggle(e){
    e.preventDefault();
    setToggleNominees(prev => !prev)
  }
  return (
    <div className="App">
      <div className="search-container">
        <MovieSearch/>
      </div>
      <button className="trophy" onClick={handleToggle}><GiTrophyCup size={30}/></button>
        {toggleNominees ? <div className='nominees-container'><Nominees/></div> : null}
      <div className="movies-container">
        <MovieContainer/>
      </div>

    </div>
  );
}

export default App;
