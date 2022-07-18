import React from 'react'
import MovieCard from '../movieCard/MovieCard'

function MovieListing() {
    const {movies}=useSelector(state=>state.movies)
  return (
    <div>
{movies?movies.map((movie,index)=><MovieCard key={index} movie={movie}/>):(<h2>there are no movies yet</h2>)}
    </div>
  )
}

export default MovieListing