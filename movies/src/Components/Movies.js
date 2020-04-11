import React, { useEffect, useState} from "react";
import axios from "axios";
import MovieCard from "./MovieCard";

const Movies = () => {

    const [movies, setMovies] = useState([])
    const [searchByThisMovie, setSearchByThisMovie] = useState({title: ""})
  
    const getMovies = () => {
      //this commented-out axios call is a search-by-id
      //axios.get("https://api.themoviedb.org/3/movie/550?api_key=727eb794d2d99f0338a6306c81041acc")
      axios.get("https://api.themoviedb.org/3/discover/movie?api_key=727eb794d2d99f0338a6306c81041acc")
        .then(response => {
          setMovies(response.data.results)
        })
        .catch(err => console.log(err))
    }
  
      // useEffect(() => {
      //   getMovies()
      // })
    const getNowPlaying = () => {
      axios.get("https://api.themoviedb.org/3/discover/movie?api_key=727eb794d2d99f0338a6306c81041acc&language=en-US&sort_by=primary_release_date.desc&include_adult=false&include_video=false&page=1")
        .then(response => console.log("recent movies", response))
        .catch(err => console.log("sucks bro"))
    }
  
    const getTopRated = () => {
      axios.get("https://api.themoviedb.org/3/discover/movie?api_key=727eb794d2d99f0338a6306c81041acc&language=en-US&sort_by=vote_average.asc&include_adult=false")
        .then(response => {
          console.log("TOP RATED MOVIES!!!", response);
          setMovies(response.data.results)
        })
        .catch(err => console.log("WELL, THAT SUCKS"))

    }
  
    const getByPopularity = () => {
      getMovies();
      let byPopularity = movies.sort((a, b) => b.popularity - a.popularity)
      //setMovies(byPopularity)
      console.log("GET BY POPULARITY!!!", byPopularity)
      setMovies(byPopularity)
    }
  
    const searchByTitle = (title) => {
      /*THIS FUNCTION IS GOOD TO GO!!!*/
      axios.get(`https://api.themoviedb.org/3/search/movie?api_key=727eb794d2d99f0338a6306c81041acc&query=${title}`)
        .then(response => {
          console.log("SEARCH BY TITLE", response.data.results);
          setMovies(response.data.results)
        
        })
        .catch(err => console.log(err))
    }
  
    const handleChange = e => {
      const {name, value} = e.target;
      setSearchByThisMovie({[name]: value})
      console.log("SEARCHBYTHISMOVIE", searchByThisMovie)
      searchByTitle(searchByThisMovie.title)
    }
  
  //searchByTitle("Star Wars")
    return (
        <div className="content-wrapper">
          <div className="filter-search-bar">
            <h3>Find a movie here.</h3>
          <div>
            <button
              onClick={getByPopularity}
            >
              Search by popularity</button>
            <button
              onClick={getNowPlaying}
            >
              Now Playing?
            </button >
            <button
              onClick={getTopRated}
              >Top-rated</button>
          </div>
          <div>
            <input 
              placeholder="search by title"
              name="title"
              value={searchByThisMovie.title}
              onChange={handleChange}
            />
            <button
              onClick={getMovies}
            >Clear search/filter</button>
          </div>
        </div>  
        <div className="movie-card-holder">
          {movies.map(movie => {
            return (          
              <MovieCard 
                key={movie.id}
                movie={movie}
              />
            )
  
          })}
        </div>
      </div>
    );
}

export default Movies;