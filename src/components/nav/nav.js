import React from 'react'
import arrow from "./images/arrow.png"
import "./nav.css"
const Nav = () => {
  return (
    <div>
        <nav className='container'>
          <button className='home'>Home</button>
          <button>Wooden Frames</button>
          <button>Metal Frames</button>
          <button>Bestsellers</button> 
          <button>Framed Prints</button>
          <button className='login'>Login/Logout <img src={arrow} alt='' /> </button>
        </nav>
    </div>
  )
}

export default Nav