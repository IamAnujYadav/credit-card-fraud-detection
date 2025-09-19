import React from 'react'
import './Hero.css'
import dark_arrow from '../../assets/dark-arrow.png'

const Hero = () => {
  return (
    <div className='hero container'>
      <div className="hero-text">
        <h1>When Fraud Thinks Fast, Our ML Thinks Faster</h1>
        <p>Built on predictive machine learning models, our solution stops fraud in its tracks. Quick, reliable, and scalable — security that evolves with every transaction.</p>
        {/* <button className='btn'>Expore more <img src={dark_arrow} alt="" /></button> */}
      </div>      
    </div>
  )
}

export default Hero
