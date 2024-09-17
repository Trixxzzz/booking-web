import React from 'react'
import "./NavBar.css"

const NavBar = () => {
  return (
    <div className='navbar'>
        <div className='navContainer'>
            <span className='logo'>Euphoria</span>
            <div className="navItems"> 
            <button className="navButton">Register</button>
            <button className="navButton">Log In</button>

            </div>
        </div>
    </div>
  )
}

export default NavBar