import React, {useEffect, useState} from 'react';
import './App.scss';
import axios from 'axios';




function App() {

  const [movies, setMovies] = useState([])
  const [searchByThisMovie, setSearchByThisMovie] = useState("")

  const getMovies = () => {
    //axios.get("https://api.themoviedb.org/3/movie/550?api_key=727eb794d2d99f0338a6306c81041acc")
    axios.get("https://api.themoviedb.org/3/discover/movie?api_key=727eb794d2d99f0338a6306c81041acc")
      .then(response => {
        console.log("GET MOVIES???", response)
      })
      .catch(err => console.log(err))
  }

    useEffect(() => {
      getMovies()
    })
  const getNowPlaying = () => {
    return
  }

  const getTopRated = () => {
    return
  }

  const getByPopularity = () => {
    return
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

//searchByTitle("Star Wars")


  return (
    <div className="content-wrapper">
      <h1>Movies</h1>
      <form>
        <input 
          placeholder="search by title"
        />
        <button>Search!</button>
      </form>
    </div>
  );
}

export default App;
