import React, { useEffect, useState } from 'react'
import products from '../utils/products'
import ProductCard from './ProductCard'
import { BsFillArrowLeftCircleFill } from "react-icons/bs";
import { BsFillArrowRightCircleFill } from "react-icons/bs";




const TopRated = () => {

  const items = [...products]

   const itemList =  items.sort((a,b)=>{
    return b.rating -a.rating;
  }).slice(0,10);

  


  const moveRight = ()=>{
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft + 390;
  }

  const moveLeft = ()=>{
    let slider = document.getElementById("slider");
    slider.scrollLeft = slider.scrollLeft - 390;
  }


  return (
    <>
    <div className='flex w-full max-w-screen-xl m-auto items-center justify-between'>

      <div className='flex'>
        <h1 className='text-6xl my-16 text-gray-600 font-semibold py-2 px-12 ' >TopRated</h1>
      </div>

      <div className='flex'>
        <span className='text-7xl   text-gray-600  px-8 transition hover:scale-110 duration-200' onClick={moveLeft}
        ><BsFillArrowLeftCircleFill /></span>
        <span className='text-7xl  text-gray-600  pr-16 transition hover:scale-110 duration-200 ' onClick={moveRight}><BsFillArrowRightCircleFill/></span>
      </div>

    </div>
    <div  id='slider'  className='flex  whitespace-nowrap gap-16 relative  max-w-screen-xl  justify-between items-center m-auto overflow-y-hidden overflow-x-scroll scroll-smooth  transition duration-200  no-scrollbar px-12'>

    { !itemList ? null : 
      itemList.map((item) =>{
        return(
        <ProductCard product={item} key={item.id} />
        )
      })
    }
     
    
    </div>
    </>
  )
}


export default TopRated


 {/* {
         !itemList ?null :(itemList.map((item)=>{
          return(
            <ProductCard product={item} key={item?.id} />
          )
        })
        )
      } */}