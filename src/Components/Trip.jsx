
import React from 'react'
import { useParams, useNavigate } from 'react-router-dom'
import { useQuery } from 'react-query'
import './Navbar.css'
import axios from 'axios'

const gettripbyid = ({queryKey}) => {
    return axios.get(`http://localhost:8800/trips/${queryKey[1]}`)
}

const Trip = () => {

    const {id} = useParams()
    const {isLoading, data} = useQuery(['trip', id], gettripbyid)
    const navigate = useNavigate()

  return (
    <div className='prod-container'>
        {
            isLoading? <h1>Loading....</h1>
            :
            <div className='individual-product'>
                <h3>{data.data.id}</h3>
                <h3>{data.data.name}</h3>
                <h3>{data.data.price}</h3>
                <button className='prod-button' onClick={() => navigate('/products')}>Back</button>               
            </div>
        }
    </div>
  )
}

export default Trip


