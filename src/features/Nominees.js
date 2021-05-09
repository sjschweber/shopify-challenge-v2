import { useState } from "react"
import { useSelector, useDispatch } from "react-redux";
import {
  getMovieTitles,
  nominate,
  withdraw
} from "./movie-search/movieSearchSlice";
import "./nominees.css"

import {
  CSSTransition,
  TransitionGroup,
} from "react-transition-group";

export function Nominees(){
  const nominees = useSelector(state => state.movieTitle.nominees)
  const dispatch = useDispatch();

  return(
    <div>

      <p>Please select up to 5 nominees: </p>

      <TransitionGroup>

        { nominees.map((movie, index) => {

            return (

              <CSSTransition key={index} timeout={500} classNames="item">
                <div className="nom-container">
                  <div className="nom-number">
                    {index + 1}.
                  </div>
                  <div className="nom-title">
                     {movie.Title}
                  </div>
                  <div className="nom-year">
                    {movie.Year}
                  </div>
                  <button className="remove-button" onClick={() => dispatch(withdraw(movie))}>Remove</button>
                </div>
              </CSSTransition>
            )
        }) }

    </TransitionGroup>

  </div>
)
}
