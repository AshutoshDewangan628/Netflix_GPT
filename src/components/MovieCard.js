import React from 'react'
import {IMG_CDN_URL} from "../utils/constat"

const MovieCard = ({poster_path}) => {
  return (
    <div className='w-40 pr-4'>
        <img alt="Movie Card" src={IMG_CDN_URL+poster_path}/>
    </div>
  )
}

export default MovieCard