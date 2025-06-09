import React from 'react'
import Navg from './Navg'
import './Home.css'


const Home = () => {
  return (
    <div className='home'>
        <div className='home-nav'>
        <Navg />
        </div>
        <div className='home-content'>
        <h1>home</h1>
        </div>
        </div>
  )
}

export default Home