import React from 'react'
import { NavLink } from 'react-router-dom'
import './Navbar.css'

const Navbar = () => {

    const activeStyle = ({isActive}) => {
        return {
            color: isActive? 'white' : 'black',
            backgroundColor: isActive? 'black': 'aqua'
        }
    }

  return (
    <>
        <div className='container'>
            <NavLink style={activeStyle} to='/'>Home</NavLink>
            <NavLink style={activeStyle} to='about'>About</NavLink>
            <NavLink style={activeStyle} to='trips'>Trips</NavLink>
            
            <NavLink className='login' style={activeStyle} to='login'>Login</NavLink>
            
        </div>
    </>
  )
}

export default Navbar