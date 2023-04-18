import React,{useState} from 'react'
import "./Body.css"
import Card from "../Card/Card"
import Footer from "../Footer/Footer"

const Body = () => {
  return (
    <div>
        <div className='main-container'>
        <Card/>
        <Footer/>
        </div>
    </div>
  )
}

export default Body