// A mock function to mimic making an async request for data
//require('dotenv').config({path: '../../../.env'})
const axios = require('axios')

export function fetchMovieTitles(movieTitle) {
  return axios.get(`http://www.omdbapi.com/?s=${movieTitle}&apikey=${process.env.REACT_APP_API_KEY}`)
}
