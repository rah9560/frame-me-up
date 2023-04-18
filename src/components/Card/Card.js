import React from 'react'
import img1 from "./images/4.6inch.jpg"
import img2 from "./images/6.8inch.jpg"
import img3 from "./images/9.12inch.jpg"
import img4 from "./images/12.12inch.jpg"
import img5 from "./images/12.18 inch.jpg"
import img6 from "./images/a4.jpg"
import "./Card.css"

const Card = () => {
  return (
    <div>
        <div className='card-container1'>
            
                <div className='border'>
                <img src={img1} alt="" className='img5'/>
                <p className='text1'>Size:4*6inches</p>
                <p className='text2'>Price:1200</p>
                <p className='text3'>Category:Metal</p>
                </div>

                <div >
                <img src={img2} alt="" className='img5'/>
                <p className='text1'>Size:6*8inches</p>
                <p className='text2'>Price:1400</p>
                <p className='text3'>Category:Metal</p>
                </div>

                <div >
                <img src={img3} alt="" className='img5'/>
                <p className='text1'>Size:9*12inches</p>
                <p className='text2'>Price:1600</p>
                <p className='text3'>Category:Metal</p>
                </div>
        </div>

        <div className='card-container2'>
            
                <div >
                <img src={img4} alt="" className='img5'/>
                <p className='text1'>Size:12*12inches</p>
                <p className='text2'>Price:2000</p>
                <p className='text3'>Category:Metal</p>
                </div>

                <div >
                <img src={img5} alt="" className='img5'/>
                <p className='text1'>Size:12*18inches</p>
                <p className='text2'>Price:2100</p>
                <p className='text3'>Category:Metal</p>
                </div>

                <div >
                <img src={img6} alt="" className='img5'/>
                <p className='text1'>Size:a4</p>
                <p className='text2'>Price:1400</p>
                <p className='text3'>Category:Metal</p>
                </div>
        </div>
    </div>
  )
}

export default Card