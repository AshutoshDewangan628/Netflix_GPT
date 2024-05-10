import { useEffect } from 'react'
import { API_options } from '../utils/constat'
import { useDispatch,useSelector } from 'react-redux'
import {addNowPlayingMovies} from "../utils/movieSlice"

const useNowPlayingMovies=()=>{
const dispatch=useDispatch();


  const getNowPlayingMovie = async()=>{
    const data=await fetch("https://api.themoviedb.org/3/movie/now_playing", API_options);
    const json=await data.json();
    dispatch(addNowPlayingMovies(json.results));
  }

  useEffect(()=>{
    getNowPlayingMovie();
  },[])
}
export default useNowPlayingMovies;