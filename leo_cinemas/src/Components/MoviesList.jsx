import React,{ useState, useEffect } from 'react';
import axios from 'axios';
import MovieCard from './MovieCard';
import { useNavigate,useLocation } from 'react-router-dom';



const MoviesList = () => {

    const [movies,setMovies] = useState([])

    const location = useLocation()
    
    useEffect(() =>{
         axios.get("http://localhost:3100/movies")
        .then((res) =>setMovies(res.data))
        .catch((err) => console.log(err))
    },[])

    const navigate = useNavigate()

    const handleSelectedMovie = (val)=>{
        navigate("/booking",{state:val})
    }
    
  return (
    <div style={{margin:50}}>

        <h1>Hi, {location.state?location.state.username:""}</h1>
        <h2>Movies</h2>

        <div style={{display:"flex",justifyContent:"space-between",flexWrap:"wrap"}}>
            {
                movies.map((val) =>{
                    return (
                        <MovieCard values={val} key={val.id} handleSelectedMovie={handleSelectedMovie}/>                        
                    )
                })
            }
        </div>
    </div>
  )
}

export default MoviesList