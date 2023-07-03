import React from 'react'
import BannerImg from '../assets/BannerImg.png'
import { Link } from 'react-router-dom'

const Banner = () => {
  return (
    <div className='w-full max-w-screen-xl flex items-center  m-auto hover:scale-105 transform duration-300   bg-pink-50 rounded-xl my-12 group  flex-col md:flex-row'>
        
        <div>

        <div className='relative overflow-hidden  w-auto'>
            <img src={BannerImg} className='w-[65rem]  rounded-xl '/>
            <div className='absolute h-full w-full bg-black/10 -bottom-10 opacity-0 group-hover:bottom-0 group-hover:opacity-100 flex items-center justify-center transition duration-300'></div>
        </div>
        </div>

        <div>
        
        <div className='flex flex-col items-center md:items-start mt-8 pb-16 px-32'>
            <h1 className='text-6xl md:text-8xl font-semibold text-gray-600 items-center'>Modern and Colourful</h1>
            <p className='line-clamp-2 text-4xl mt-16 w-[35rem] py-2 text-gray-700 font-semibold'>Modern silhouettes with tasteful mix of furniture to add style and spunk to your home.</p>
            <button type="button" className='text-3xl mt-4 font-semibold text-pink-100 rounded-2xl p-2 bg-gray-700 shadow-lg'><Link to={'/category/Home & Furniture'}> SHOP NOW </Link></button>
        </div>

        </div>

    </div>
  )
}

export default Banner