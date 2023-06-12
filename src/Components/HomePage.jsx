import React from 'react'
import home from './home.avif'
import './Navbar.css'

const HomePage = () => {
  return (
    <div>
        <h1>Welcome!!</h1>
        <img src={home} alt='Image here' className='home-image'></img>
    </div>
  )
}

export default HomePage