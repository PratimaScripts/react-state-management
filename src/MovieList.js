import React, {useContext } from "react";
import Movie from "./Movie";
import { MovieContext } from "./MovieContext";

const MovieList = () => {
    const [movies, setMovies] = useContext(MovieContext)
    console.log(setMovies);
    return (
        <div>
            {movies.map((movie, id)=> (
                <Movie name={movie.name} price={movie.price} key={id}/>
            ))}
        </div>
    )
}

export default MovieList;