import React from "react";

const MovieCard = ({movie}) => {
    return (
        <div className="movie-card">
            <img src={movie.poster_path}/>
            <h3>{movie.title}</h3>
            <button>See details</button>

        </div>
    )
}

export default MovieCard;