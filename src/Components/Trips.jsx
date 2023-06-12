import React from 'react'
import { useQuery } from 'react-query'
import axios from 'axios'
import { Link, Outlet } from 'react-router-dom'

const gettrips = () => {
    return axios.get('http://localhost:8800/trips')
}
const Trips = () => {

    
    
    
    const {isLoading, data} = useQuery('products', gettrips)
    

  return (
    <>
        <h1>Tourist places</h1>

        {
            isLoading? <h1>Loading....</h1>
            :
            data.data.map(trip => (
                <div key={trip.id}>
                    <Link to={`${trip.id}`}>{trip.name}</Link>                  
                </div>
            ))
        }

        <Outlet/>
    </>
  )
}

export default Trips
