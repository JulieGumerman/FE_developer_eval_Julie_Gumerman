import React, {useEffect} from 'react';
import './App.scss';
import axios from 'axios';




function App() {

const getMovies = () => {
  axios.get("https://api.themoviedb.org/3/movie/550?api_key=727eb794d2d99f0338a6306c81041acc")
    .then(response => console.log(response))
    .catch(err => console.log(err))
}

useEffect(() => {

  getMovies()

}, [])

  return (
    <div className="content-wrapper">
      <h1>Movies</h1>
    </div>
  );
}

export default App;
