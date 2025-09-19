import React from 'react'
import './About.css'
import about_img from '../../assets/about-tranction.png'
import play_icon from '../../assets/play-icon.png'

const About = ({setPlayState}) => {
  return (
    <div className='about'>
      <div className="about-left">
        <img src={about_img} alt="" className='about-img'/>
        <img src={play_icon} alt="" className='play-icon' onClick={()=>{setPlayState(true)}}/>
      </div>
      <div className="about-right">
        <h3>ABOUT SYSTEM</h3>
        <h2>Data-Driven Fraud Protection</h2>
        <p>This project aims to secure online payments by detecting fraudulent credit card transactions using machine learning, ensuring accuracy, reliability, and real-time prevention to protect users against digital fraud.</p>
        <p>Our system applies intelligent algorithms to identify unusual transaction patterns, flag fraudulent activities, and provide enhanced security, making credit card payments safer, smarter, and more trustworthy.</p>
        <p>Designed to fight digital fraud, this project leverages machine learning models to analyze transaction behavior, detect anomalies instantly, and deliver a secure, fraud-free payment experience for all users.</p>
      </div> 
    </div>
  )
}

export default About
