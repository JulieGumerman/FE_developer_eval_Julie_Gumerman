import React, {useEffect, useState} from 'react';
import './App.scss';
//import axios from 'axios';
//import MovieCard from "./Components/MovieCard";
import Movies from "./Components/Movies"
import { Route } from "react-router-dom";
import MovieDetails from "./Components/MovieDetails";
import AppHeader from "./Components/AppHeader";



function App() {

  return (
    <div className="app">
      <AppHeader />
      <Route exact path="/" component={Movies}/>
      <Route path={`/:id`} component={MovieDetails} />
    </div>
  )

//   const [movies, setMovies] = useState([])
//   const [searchByThisMovie, setSearchByThisMovie] = useState({title: ""})

//   const getMovies = () => {
//     //this commented-out axios call is a search-by-id
//     //axios.get("https://api.themoviedb.org/3/movie/550?api_key=727eb794d2d99f0338a6306c81041acc")
//     axios.get("https://api.themoviedb.org/3/discover/movie?api_key=727eb794d2d99f0338a6306c81041acc")
//       .then(response => {
//         console.log("GET MOVIES???", response)
//         setMovies(response.data.results)
//       })
//       .catch(err => console.log(err))
//   }

//     // useEffect(() => {
//     //   getMovies()
//     // })
//   const getNowPlaying = () => {
//     return
//   }

//   const getTopRated = () => {
//     return
//   }

//   const getByPopularity = () => {
//     return
//   }
 

//   const searchByTitle = (title) => {
//     /*THIS FUNCTION IS GOOD TO GO!!!*/
//     axios.get(`https://api.themoviedb.org/3/search/movie?api_key=727eb794d2d99f0338a6306c81041acc&query=${title}`)
//       .then(response => {
//         console.log("SEARCH BY TITLE", response.data.results);
//         setMovies(response.data.results)
      
//       })
//       .catch(err => console.log(err))
//   }

//   const handleChange = e => {
//     const {name, value} = e.target;
//     setSearchByThisMovie({[name]: value})
//     console.log("SEARCHBYTHISMOVIE", searchByThisMovie)
//     searchByTitle(searchByThisMovie.title)
//   }

// //searchByTitle("Star Wars")


  //return (
    // <div className="content-wrapper">
    //   <h1>Movies</h1>
    //     <div className="filter-search-bar">
    //     <button>Search by popularity</button>
    //     <button>Now Playing?</button>
    //     <button>Top-rated</button>
    //     <input 
    //       placeholder="search by title"
    //       name="title"
    //       value={searchByThisMovie.title}
    //       onChange={handleChange}
    //     />
    //     <button
    //       onClick={getMovies}
    //     >Clear search/filter</button>
    //   </div>  
    //   <div className="movie-card-holder">
    //     {movies.map(movie => {
    //       return (          
    //         <MovieCard 
    //           key={movie.id}
    //           movie={movie}
    //         />
    //       )

    //     })}
    //   </div>
    // </div>
  //);
}

export default App;
