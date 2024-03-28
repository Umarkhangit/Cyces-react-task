import React from 'react'

const MovieCard = ({values}) => {

    console.log(values.movieName)
  return (
    <div>
        <h3>{values.movieName}</h3>
        <p>{values.movieLanguage}</p>
        <p>{values.Rate}</p>
    </div>
  )
}

export default MovieCard