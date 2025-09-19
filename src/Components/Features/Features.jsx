import React from 'react'
import './Features.css'
import Program_1 from '../../assets/p1.png'
import Program_2 from '../../assets/F2.png'
import Program_3 from '../../assets/p3.png'

const Feature = () => {
  return (
    <div className='programs'>
        <div className="program">
            <img src={Program_1} alt="" />
        </div>
        <div className="program">
            <img src={Program_2} alt="" />
        </div>
        <div className="program">
            <img src={Program_3} alt="" />
        </div>
      
    </div>
  )
}

export default Feature
