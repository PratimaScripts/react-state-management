import React, { createContext, useState } from "react"

export const MovieContext = createContext();

export const MovieProvider = (props) => {
    const [movies, setMovies] = useState([
        {
            name: 'Harry Potter',
            price: '$10',
            id: 123456
        },
        {
            name: 'Games of Thrones',
            price: '$10',
            id: 667892 
        },
        {   name: 'Inception',
            price: '$10',
            id: 1122334
        }
    ])

    return(
        <MovieContext.Provider value={[movies, setMovies]}>
            {props.children}
        </MovieContext.Provider>
    )
}