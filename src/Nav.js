import React, {useContext} from "react";
import { MovieContext } from "./MovieContext";

const Nav = () => {
    const [movies, setMovies] = useContext(MovieContext)
    console.log(setMovies);
    return (
            <nav className="navbar navbar-dark bg-dark">
                <div className="container">
                    <a className="navbar-brand" href="/" >Pratima Gautam</a>
                    <span className="navbar-brand" style={{marginRight: "10%"}}>
                        List of the Movies: {movies.length}
                    </span>
                </div>
            </nav>
        
    )
}

export default Nav;