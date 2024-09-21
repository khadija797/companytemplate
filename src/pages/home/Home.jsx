import React from 'react'
import './Home.css'
import Header from '../../component/header/Header'
import Mission from '../../component/mission/Mission'
import Who from '../../component/who/Who'
import Work from '../../component/work/Work'
import Technologies from '../../component/technologies/Technologies'

const Home = () => {
  return (
    <div className='home'>
      <Header />
      <Mission />
      <Who />
      <Work />
      <Technologies />
    </div>
  )
}

export default Home
