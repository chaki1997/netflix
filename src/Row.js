import React, { useEffect, useState } from 'react'
import axios from './axios'
import './row.css'
const base_url="https://image.tmdb.org/t/p/original/"
function Row({title, fetchUrl}) {
  const [movies, setMovies]=useState([])
// console.log(axios)
  //  A snippet of code which run base a speccific condifion/variable
  useEffect(()=>{
    //if [], run once when a row loads and dont run again
    async function fetchData(){
      const requests=await axios.get(fetchUrl)
      console.log(requests)
      setMovies(requests.data.results)
      return requests
    }
    fetchData()
  },[fetchUrl])

  return (
    <div>
        {/* title */}
        <h2>{title}</h2>

        <div className='row__posters'>
          {movies.map((movies)=>{
            return(
              
              <img
                key={movies.id}
                className='row__poster'
                src={`${base_url}${movies.poster_path}`} 
                alt={movies.name} 
              />
            )
          })}
        </div>
        {/* container -> posters */}
    </div>
  )
}

export default Row