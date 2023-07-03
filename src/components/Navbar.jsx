import React, { useState } from 'react'
import { Link } from 'react-router-dom';
import logo from './../assets/Logo.png'
import { BiSearchAlt2 } from "react-icons/bi";

import { FaShoppingCart } from "react-icons/fa";
import { HiMenu } from "react-icons/hi";
import { AiOutlineDown } from "react-icons/ai";
import { AiOutlineUp } from "react-icons/ai";
import { IoMdClose } from "react-icons/io";
import { MdDelete } from "react-icons/md";

import { CartState } from '../context/Context';

import products from '../utils/products';

const categories = ['All','Automotive','Electronics','Mens Fashion','Womens Fashion','Grocery','Home & Furniture','Personal Care']

const Navbar = () => {

    const {
        state: {cart},
        dispatch,
      } = CartState();
      

    const [isCategoryVisible, setIsCategoryVisible] = useState(false);
    const [isMenuVisible, setIsMenuVisible] = useState(false);
    const [isCartVisible, setIscartVisible] = useState(false);
    
      


    return (
        <div className='z-20 bg-white'>
   
{/* dev  for menu */}

        {isMenuVisible? 
            <div className='w-[140px] bg-white fixed h-screen flex flex-col px-4 z-20 sm:hidden'
        onMouseLeave={()=>{setIsMenuVisible(false);
        setIsCategoryVisible(false)}}>

            <div className='mt-1 ' 
            onClick={()=>{setIsMenuVisible(false)}}> 
                <IoMdClose className='text-xl font-bold text-gray-600 cursor-pointer transform duration-200'/>
            </div>

            <div className='py-2'>
                <span className='text-gray-600 text-lg font-semibold hover:text-blue-500 transform duration-200 flex mt-1'
                onClick={()=>{setIsCategoryVisible(!isCategoryVisible);}}>

                Categories{isCategoryVisible?
                    <AiOutlineUp className='mt-1' />
                    :
                    <AiOutlineDown    className='mt-2' />}

                </span>
                {isCategoryVisible?
                    <ul>
                    {categories.map((category)=>{
                        return(
                        
                        <Link to={"/category/"+category}> <li className='hover:text-blue-500 pl-4 py-2 transform duration-200 text-gray-600 text-lg font-semibold'
                        onClick={()=>{setIsMenuVisible(false)}} >{category}</li></Link>
                        )})
                    }    
                    </ul>
                :null}
                </div>

           

        </div> :null}
    
 {/* div for navbar */}

    <div className=' w-full pt-1 z-10 fixed bg-white'>
    
        <div className=' mx-auto max-w-[120rem] h-8 sm:h-10 md:h-12 lg:h-16'>
        
            <div className='flex w-full items-center justify-between px-4'>


{/* Div for Logo */}


                <div  className='flex items-center gap-1'> 
                
                    <div onClick={()=>{setIsMenuVisible(true)}}><HiMenu  className='text-xl text-gray-600 cursor-pointer transform duration-200 sm:hidden'/>
                    </div>

                    <div>
                        <Link to='/'> 
                        <img src={logo} alt='logo' className='h-6 sm:h-8 md:h-10 lg:h-14 cursor-pointer' />
                        </Link>
                    </div>
                    
                </div>

{/* Div for Category and buttons */}

                <div className='hidden sm:block'>

                    <div className='flex gap-6 md:gap-12 lg:gap-20  items-center cursor-pointer  '>
                    
                        <div className='h-8 sm:h-10 md:h-12 lg:h-16' 
                            onMouseEnter={()=>{setIsCategoryVisible(true);}}
                            onMouseLeave={()=>{setIsCategoryVisible(false); }}
                            onClick={()=>{setIsCategoryVisible(!isCategoryVisible);}}>


                            <span className='text-gray-600 text-md sm:text-lg md:text-2xl lg:text-3xl font-semibold hover:text-blue-500 transform duration-200 flex mt-1 md:mt-2 lg:mt-3'>
                                Categories{isCategoryVisible?
                                    <AiOutlineUp className='mt-1' />:<AiOutlineDown className='mt-2' />}
                            </span>

                            {isCategoryVisible?
                            <ul className='fixed mt-2  lg:mt-3 bg-white  w-auto  rounded-b-md shadow-md
                            text-gray-600 text-md sm:text-lg md:text-2xl lg:text-3xl font-semibold   '
                            onMouseEnter={()=>{setIsCategoryVisible(true);}}>

                                {categories.map((category)=>{
                                    return(

                                    <li className='hover:text-blue-500 py-2 px-2 transform duration-200' key={category} >
                                        <Link to={"/category/"+category}>
                                        {category}
                                        </Link>
                                    </li>
                                    )
                                })
                                }
                            </ul>
                            :null}

                        </div>

                        
                    </div>

                </div>
                {/* Div for cart */}
                <div className='flex '>
                    
                    
                    <div>
                    <div className='px-1 md:px-2 lg:px-3 md:w-28 w-16 rounded-2xl bg-slate-50 flex items-center hover:bg-blue-100 cursor-pointer '
                    onClick={()=>{
                        setIscartVisible(!isCartVisible)
                    }}> 
                        <FaShoppingCart className='text-4xl h-6 md:h-8 lg:h-10  text-slate-500  transform duration-200'/>
                        <p className='pl-4 pr-2 md:text-3xl text-xl h-6 md:h-8 lg:h-10 font-bold text-gray-700'>{cart.length}</p>
                    </div>
                    {(isCartVisible && cart.length>0) &&
                        <div className='py-4 mt-2  bg-slate-50 rounded-2xl absolute right-5 md:right-20  '>
                        <ul className=''>
                            { cart.map((item)=>
                                <li className='flex justify-between py-2 items-center'>
                              <img src={item?.product?.images[0] } className= ' w-12 rounded-full mx-4'/>
                              <div>
                              <p className='w-60 truncate font-semibold text-lg  text-slate-800'>{item?.product?.title}</p>
                                <div className='flex px-2'>
                                    <p  className='px-2 font-semibold  text-slate-800'>Subtotal : ${(((item?.product.price -( item?.product.price * (item?.product.discountPercentage / 100 ))))*item?.quantity).toFixed(2)}</p>
                                    <p className='font-semibold  text-slate-800'>Qty : {item?.quantity}</p>
                                </div>
                              </div>
                              <span className='px-2 text-3xl text-slate-500 hover:text-slate-800'>
                                <MdDelete onClick={()=>{
                                    dispatch({
                                    
                                    type:'REMOVE_FROM_CART',
                                payload: {...item}
                                    })
                                    }}/></span>
                            </li>
                            )}
                            {cart.length>0 &&
                            <li>
                            <button className='w-80 px-2 py-2 h-12 bg-green-500 text-3xl rounded-2xl font-semibold text-white hover:bg-green-700 shadow-xl mx-8'>
                            <Link to={"/cart"}>GO TO CART </Link>
              </button>
                            </li>}
                            
                        </ul>
                    </div>}
                    
                    </div>

                </div>

            </div>
        
        </div>
      
    </div>
   
    </div>
  )
}

export default Navbar