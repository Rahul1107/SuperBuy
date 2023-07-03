import React from 'react'
import {MdError} from 'react-icons/md';
import { Link } from 'react-router-dom';

const ErrorPage = () => {
  return (
    <div className='flex flex-col w-full max-w-screen-xl h-screen m-auto justify-center items-center '>
      <div className='text-9xl'>
      <MdError className='text-red-500 '/>
      </div>
      <div className='my-4'>
      <h1 className='text-4xl font-semibold'>
        Oops! Something went wrong...
      </h1>
      </div>
      <div className=''>
      <p className='text-4xl text-white font-semibold px-4 rounded-2xl mt-16 bg-blue-400 h-20 items-center pt-4 cursor-pointer hover:bg-blue-700'><Link to={"/"}>GO TO HOMEPAGE</Link></p>
      </div>
      
    </div>
  )
}

export default ErrorPage