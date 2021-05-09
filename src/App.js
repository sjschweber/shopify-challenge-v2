import React, {useState} from "react";
import logo from "./logo.svg";
import { Counter } from "./features/counter/Counter";
import {MovieContainer} from "./features/display-movies/movieContainer.js"
import { MovieSearch } from "./features/movie-search/MovieSearch"
import { Nominees } from "./features/Nominees.js"
import "./App.css";
import { GiTrophyCup } from "react-icons/gi";
import { useSelector, useDispatch } from "react-redux";


function App() {

  const [toggleNominees, setToggleNominees] = useState(false)
  const nominees = useSelector(state => state.movieTitle.nominees)
  const movieTitles = useSelector(state => state.movieTitle.titles)

  function handleToggle(e){
    e.preventDefault();
    setToggleNominees(prev => !prev)
  }

  return (
    <div className="App">
      {nominees.length >= 5 ? <div className="banner">Thank you for selecting 5 nominees!</div> : null}

      <div className="header">

        <div className="header-text">

          <h1 className="shoppies-title">The Shoppies</h1>
          <p style={{color: "white", padding: "1rem"}}>Welcome to The Shoppies! Please scroll down to search for movies to nominate...</p>

        </div>

      </div>

      <div className="layout">
        <div className="search-container">
          Search Movies to Nominate
          <MovieSearch/>
        </div>

        <div className="nominees-container">
          <Nominees/>
        </div>

        {
          movieTitles !== null ?
          <div className="movies-container">
            <MovieContainer/>
          </div>
          : null
        }

      </div>

    </div>
  );
}

export default App;
