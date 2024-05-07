import { API_options } from '../utils/constat'
import { useDispatch, useSelector } from 'react-redux';
import { addTrailerVideo } from '../utils/movieSlice';
import { useEffect } from 'react';
const useMovieTrailer = (movieID) => {
    const dispatch=useDispatch();
    const getMoviesVideo=async()=>{
        const data=await fetch("https://api.themoviedb.org/3/movie/"+movieID+"/videos?language=en-US",API_options)
        const json=await data.json();
        const filterData=json.results.filter(video=>video.type==="Trailer")
        const trailer=filterData.length?filterData[0]:json.results[0];
        dispatch(addTrailerVideo(trailer));
    }
    useEffect(()=>{
        getMoviesVideo();
    },[])
}

export default useMovieTrailer