import React from "react";
import { Link } from "react-router-dom";

const MovieCard = ({movie}) => {
    let getImg = null
    if (movie.poster_path === null) {
        console.log("Hi from movie poster path if statement")
        getImg = "https://cdn1.vectorstock.com/i/1000x1000/73/50/the-clapper-board-icon-movie-symbol-flat-vector-5277350.jpg"
    } else {
        getImg = `https://image.tmdb.org/t/p/w500/${movie.poster_path}`
    }
    console.log("getImg", getImg)
    return (
        <div className="movie-card">
            {/* <img src={`https://image.tmdb.org/t/p/w500/${movie.poster_path}`}/> */}
            <img src={getImg} />
            <h3>{movie.title}</h3>
            <button>
                <Link className="link" to={`/${movie.id}`}>See details</Link>
            </button>

        </div>
    )
}

export default MovieCard;