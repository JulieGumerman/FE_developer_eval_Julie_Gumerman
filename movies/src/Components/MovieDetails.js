import React, { useEffect, useState } from "react";
import axios from "axios";
import { Link } from "react-router-dom";

const MovieDetails = ({match}) => {
    const [movie, setMovie] = useState({})


    let movie_id = match.params.id

    const getMoviesById = (id) => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=727eb794d2d99f0338a6306c81041acc`)
            .then(movie => {
                setMovie(movie.data)
            })
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getMoviesById(movie_id)
    }, [])

    console.log("MOVIE DATA!!!", movie)
    return (
        <div className="content-wrapper">
            <div className="movie-wrapper">
                <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
                <h1>{movie.title}</h1>
                <p>{movie.overview}</p>
                <button>
                    <Link 
                        to={"/"}
                        className="link"
                    >
                        Return to movies
                    </Link>
                    </button>
            </div>
        </div>
    );
}

export default MovieDetails;