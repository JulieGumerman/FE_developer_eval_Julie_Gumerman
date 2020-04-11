import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({movie}) => {
    return (
        <div className="movie-card">
            <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/>
            <h3>{movie.title}</h3>
            <button>
                <Link className="link" to={`/${movie.id}`}>See details</Link>
            </button>

        </div>
    )
}

export default MovieCard;