import React from 'react'
import logo from "./images/framemeup.png"
import search from "./images/search.png"
import "./top.css"


const Top = () => {
  return (
    <div>
        <div className='container1'>
            <img className='img1' src={logo} alt=''/>
            <div className='imgcontainer'>
            <img className='img2'src= {search} alt=""></img>
            </div>
            <input type={'search'} className="bar"></input>
            <input type={'button'} value="Search" className='btn1' ></input>
        </div>
    </div>
  )
}

export default Top