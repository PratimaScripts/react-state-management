import React, { useState, useContext } from 'react'
import { MovieContext } from './MovieContext';

const AddMovie = () => {
    const [name, setName] = useState('');
    const [price, setPrice] = useState('');

    const [movies, setMovies] = useContext(MovieContext)

    console.log(movies);
    const updateName = (e) => {
        setName(e.target.value)
    }

    const updatePrice = (e) => {
        setPrice(e.target.value)
    }

    const handleSubmit = (e) => {
        e.preventDefault();
        setMovies(prevMovies => [...prevMovies, {name: name, price: price}] )
    }

    return (
        <div className="container" style={{marginTop: "15px"}}>
            <form className="container" style={{width: "420px"}} onSubmit={handleSubmit}>
                <div className="form-group">
                    <label htmlFor="InputName">Movie Name</label>
                    <input type="text" className="form-control" id="InputName" name="name" value={name} onChange={updateName} aria-describedby="name" placeholder="Enter Name" />
                </div>
                <div className="form-group">
                    <label htmlFor="InputPrice">Price</label>
                    <input type="number" className="form-control" id="InputPrice" name="price" value={price} onChange={updatePrice} aria-describedby="price" placeholder="Enter Price" />
                </div>
                <button type="submit" className="btn btn-primary">Submit</button>
            </form>    
        </div>   
    )
}

export default AddMovie;