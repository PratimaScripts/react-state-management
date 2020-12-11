import React from "react";

const Movie = ({name, price}) => {
    
    return (
        <div className="container" style={{marginTop: "15px", marginRight: "50%"}}>
            <h3>{name}</h3>
            <p>{price}</p>
        </div>
    )
}

export default Movie;