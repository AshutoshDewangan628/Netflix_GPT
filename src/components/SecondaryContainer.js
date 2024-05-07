import React from 'react'
import { useSelector } from 'react-redux';
import MovieList from './MovieList';

const SecondaryContainer = () => {
  const movie=useSelector((store)=>store.movie);
  return (
    movie.nowPlayingMovies &&(
    <div className='bg-black'>
    <div className='-mt-40 relative z-20'>
      <MovieList title={"Now Playing"} movie={movie.nowPlayingMovies}/>
      <MovieList title={"Now Trending"} movie={movie.nowPlayingMovies}/>
      <MovieList title={"Now Popular"} movie={movie.popularMovies}/>
      <MovieList title={"Upcoming Movies"} movie={movie.nowPlayingMovies}/>
      <MovieList title={"Horror Movies"} movie={movie.nowPlayingMovies}/>
      </div>
    </div>
    )
  );
}

export default SecondaryContainer;
