import React, { useEffect, useState } from 'react'

function Row({title}) {
  const [movies, setMovies]=useState([])

  //  A snippet of code which run base a speccific condifion/variable
  useEffect(()=>{
    //if [], run once when a row loads and dont run again
  },[movies])

  return (
    <div>
        {/* title */}
        <h2>{title}</h2>
        {/* container -> posters */}
    </div>
  )
}

export default Row