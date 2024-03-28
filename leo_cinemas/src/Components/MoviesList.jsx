import React from 'react';
import axios from 'axios';
import { useState, useEffect } from 'react';
import MovieCard from './MovieCard';


const MoviesList = () => {

    const [movies,setMovies] = useState([])

    useEffect(() =>{
         axios.get("http://localhost:3100/movies")
        .then((res) =>setMovies(res.data))
        .catch((err) => console.log(err))
    },[])

  return (
    <div>
        <h2>Movies</h2>

        <div style={{display:"flex",justifyContent:"space-around",flexWrap:"wrap"}}>
            {
                movies.map((val) =>{
                    return (
                        <MovieCard values={val}/>                        
                    )
                })
            }
        </div>
    </div>
  )
}

export default MoviesList