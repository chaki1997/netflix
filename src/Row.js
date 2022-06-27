import React, { useEffect, useState } from 'react'
import axios from './axios'
import './row.css'
import YouTube from 'react-youtube';
import moviesTrailer from 'movie-trailer'
const base_url="https://image.tmdb.org/t/p/original/"
function Row({title, fetchUrl, isLargeRow}) {
  const [movies, setMovies]=useState([])
  const [trailerUrl, settrailerUrl]=useState("")
// console.log(axios)
  //  A snippet of code which run base a speccific condifion/variable
  useEffect(()=>{
    //if [], run once when a row loads and dont run again
    async function fetchData(){
      const requests=await axios.get(fetchUrl)
      // console.log(requests)
      setMovies(requests.data.results)
      return requests
    }
    fetchData()
  },[fetchUrl])
  const opts={
    height:'390px',
    width:"100%",
    playerVars:{
      autoplay:1,
    }
  }
  const handleClick=(moviesId)=>{
    if(trailerUrl){
      settrailerUrl('')
    }else{
      moviesTrailer(moviesId?.name || "")
      .then(url=>{
        const urlParams=new URLSearchParams(new URL(url).search)
        settrailerUrl(urlParams.get('v'))
      }).catch(error=>console.log(error))
    }
  }
  return (
    <div>
        {/* title */}
        <h2>{title}</h2>

        <div className='row__posters'>
          {movies.map((movies)=>{
            return(
              
              <img
                key={movies.id}
                onClick={()=>handleClick(movies)}
                className={`row__poster ${isLargeRow && "row__posterLarge"}`}
                src={`${base_url}${isLargeRow ? movies.poster_path  : movies.backdrop_path}`} 
                alt={movies.name} 
              />
            )
          })}
        </div>
        {/* container -> posters */}
       {trailerUrl &&<YouTube videoId={trailerUrl} opts={opts} /> }
    </div>
  )
}

export default Row