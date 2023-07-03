import React from 'react'
import Hero from '../components/Hero'
import TopRated from '../components/TopRated'
import Deals from '../components/Deals'
import Banner from '../components/Banner'

const Home = () => {
  return (
    <div className=''>
        <Hero/>
        <TopRated/>
        <Banner />
        <Deals/>
    </div>
  )
}

export default Home