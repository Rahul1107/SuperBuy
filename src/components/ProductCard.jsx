import React from 'react'
import {BsFillStarFill } from 'react-icons/bs'
import { Link } from 'react-router-dom'

const ProductCard = ({product}) => {
    const currentPrice = (product.price -( product.price * (product.discountPercentage / 100 ))).toFixed(2)
  
  return (

    <Link to={"/product/"+product.id}>
    <div className='flex flex-col my-8 bg-slate-50  rounded-xl mx-8 hover:scale-105 transform duration-300 w-[340px] '>
        <div className='h-72 w-[340px] overflow-hidden relative rounded-xl cursor-pointer '>
         
            <img src={product.images[0]} className='h-72 w-[340px] absolute  object-fill '/>
        </div>
        <div className='flex flex-col mt-6 mb-3'>

            <h3 className='text-3xl font-semibold text-gray-600 mt-4'>{product.brand}</h3>

            <h2 className='text-4xl font-semibold text-gray-800 mt-4 truncate h-12'>{product.title}</h2>

            <div className='flex relative mt-3 mb-2 '>
                <p className='h-10 bg-green-600 w-28 rounded-xl text-white text-3xl px-4 py-0 font-semibold '>{product.rating}
                </p>
                <BsFillStarFill className='absolute left-20 top-1 text-2xl text-white'/>
            </div>

            <div className='flex mt-2 mb-2 '>
                <p className='text-3xl font-bold pr-4 text-gray-800'>${currentPrice}</p>
                <p className='text-2xl font-bold pr-2  py-1 text-gray-600 line-through'>${product.price}</p>
                <p className='text-2xl font-bold py-1 text-green-600 '>{product.discountPercentage}%</p>
            </div>

        </div>

    </div>
</Link>
    
  )
}

export default ProductCard