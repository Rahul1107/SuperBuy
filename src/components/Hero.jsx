import React from 'react'
import Electonics from "../assets/Electronics.jpg"
import Skincare from "../assets/Skincare.jpg"
import Fashion from "../assets/Fashion.jpg"
import Furniture from "../assets/Furniture.jpg"
import { Link } from 'react-router-dom'


const Hero = () => {
  return (
    <>
    <div className='flex justify-center w-full max-w-screen-xl m-auto h-screen px-12 items-center '>
    
        <div className='grid grid-cols-8 grid-rows-6  gap-3 w-full h-screen md:pt-20 lg:pt-36 pb-10   '>
        <div className='grid col-span-4 row-span-3 md:col-span-4 md:row-span-6 cursor-pointer '>
            <div className='relative '>
            <Link to={'/category/Electronics'}>
            <img src={Electonics} alt='Electronics' className='absolute w-full h-full  '/>
            <p className='font-semibold text-white bg-gray-500/50 rounded-xl text-5xl md:text-6xl text absolute bottom-6 left-6 hover:scale-105 transform duration-300'>Electonics</p>
            </Link>
            </div>    
        </div>

        <div className='grid col-span-4 row-span-3 md:col-span-2 md:row-span-6   cursor-pointer'>
          <div className='relative '>
          <Link to={'/category/Personal Care'}>
            <img src={Skincare} alt='Electronics' className='  absolute w-full h-full '/>
            <p className='font-semibold text-white bg-gray-500/50 rounded-xl text-5xl md:text-6xl text absolute bottom-6 left-6 hover:scale-105 transform duration-300'>SkinCare</p>
            </Link>
          </div>
        </div>

        <div className='grid col-span-4 row-span-3 md:col-span-2 md:row-span-3  cursor-pointer'>
          <div className='relative '>
          <Link to={'/category/Womens Fashion'}>
            <img src={Fashion} alt='Electronics' className='  absolute w-full h-full '/>
            <p className='font-semibold text-white bg-gray-500/50 rounded-xl text-5xl md:text-6xl text absolute bottom-6 left-6 hover:scale-105 transform duration-300'>Fashion</p>
            </Link>
          </div>
        </div>

        <div className='grid col-span-4 row-span-3 md:col-span-2 md:row-span-3 cursor-pointer'>
          <div className='relative '>
          <Link to={'/category/Home & Furniture'}>
            <img src={Furniture} alt='Electronics' className='  absolute w-full h-full '/>
            <p className='font-semibold text-white bg-gray-500/50 rounded-xl text-5xl md:text-6xl text absolute bottom-6 left-6 hover:scale-105 transform duration-300'>Furniture</p>
            </Link>
          </div>
        </div>
        </div>
    </div>
    
    
    </>
  )
}

export default Hero