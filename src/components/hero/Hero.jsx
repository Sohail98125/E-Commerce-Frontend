import React from 'react'
import './Hero.css'

const Hero = () => {
  return (
    <>
     <div className='hero'>
        <div className='hero-left'>
            <h2>NEW ARRIVALS ONLY</h2>
            <div>
                <p>new</p>
                <p>collections</p>
                <p>for everyone</p>
            </div>
        </div>
      <div className="hero-right">
        <img src="/img/hero-image.png" alt="" />
      </div>
    </div>
    </>
   
  )
}

export default Hero