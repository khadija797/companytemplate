import React from 'react'
import './Technologies.css'
import { assets } from '../../assets/assets'

const Technologies = () => {
  return (
    <div className='tech'>
      <h2>TECHNOLOGIES</h2>
      <div className="tech-list">
        <img src={assets.reactJS} alt="" />
        <img src={assets.nodejs} alt="" />
        <img src={assets.mySql} alt="" />
        <img src={assets.mongoDB} alt="" />
        <img src={assets.coeignitor} alt="" />
        <img src={assets.bootstrap} alt="" />
      </div>
    </div>
  )
}

export default Technologies
