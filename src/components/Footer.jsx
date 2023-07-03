import React from 'react'

const Footer = () => {
  return (
    <div className='bg-slate-100 py-16 '>
        <div className='flex w-full max-w-screen-xl m-auto  justify-between px-16 text-5xl flex-wrap  '>
            <div className=' flex flex-col mt-24 '>
                <span className='text-gray-800 text-5xl font-semibold'>Newsletter</span>
                <span className='text-gray-600 text-2xl font-semibold line-clamp-2 w-96 pt-2 mt-4'>Subscribe to our newsletter and stay updated. </span>
                <input type='text' placeholder='Your Email' className='px-4 rounded-3xl  bg-[#f5f7f9] shadow-lg text-4xl h-12 mt-4 text-blue-500 focus:outline-none'/>
                <button className='w-40 mt-4 text-3xl font-semibold bg-gray-500 text-white rounded-2xl hover:bg-blue-500 transform duration-200 h-12 shadow-lg'>Subscribe</button>
            </div>

            <div className='flex flex-col mt-24'>
                <span className='text-gray-800 text-5xl font-semibold cursor-pointer hover:text-gray-950'>Recent News</span>
                <span className='text-gray-800 text-4xl font-semibold mt-8 cursor-pointer hover:text-gray-950'>About Us</span>
                <span className='text-gray-800 text-4xl font-semibold mt-2 cursor-pointer hover:text-gray-950 '>Services</span>
            </div>


            <div className='flex flex-col mt-24'>
                <span className='text-gray-800 text-5xl font-semibold'>Contact Us</span>
                <span className='text-gray-800 text-2xl font-semibold mt-8'>Phone: +1 (0) 000 0000 001</span>
                <span className='text-gray-800 text-2xl font-semibold mt-2'>Email: yourmail@example.com</span>
                <span className='text-gray-800 text-2xl font-semibold line-clamp-2 mt-2'>Address:1234 Street Name City, AA 99999</span>
            </div>
        </div>
    </div>
  )
}

export default Footer