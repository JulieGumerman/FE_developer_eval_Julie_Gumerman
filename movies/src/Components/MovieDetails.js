import React, { useEffect } from "react";
import axios from "axios";

const MovieDetails = ({match}) => {
    console.log("MATCH PARAMS", match)
    console.log("MATCH PARAMS ID", match.params.id)

    const getMoviesById = (id) => {
        axios.get(`https://api.themoviedb.org/3/movie/${id}?api_key=727eb794d2d99f0338a6306c81041acc`)
            .then(movie => console.log(movie))
            .catch(err => console.log(err))
    }

    useEffect(() => {
        getMoviesById(match.params.id)
    }, [])
    
    return (
        <h1>Hello from movie details screen!!!</h1>
    );
}

export default MovieDetails;