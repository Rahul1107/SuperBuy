import React, { useEffect, useState } from 'react'
import { AiFillPlusCircle } from 'react-icons/ai';
import { AiFillMinusCircle } from 'react-icons/ai';
import { MdDelete } from "react-icons/md";
import { CartState } from '../context/Context';
import { Link } from 'react-router-dom';

const CartPage = () => {

    const [total, setTotal] = useState()

    

    const {
        state: {cart},
        dispatch,
      } = CartState();
    
       
    useEffect(() =>{
        setTotal(cart.reduce((acc,curr)=>acc+((curr.product.price - (curr.product.price ) * (curr.product.discountPercentage / 100 )) * curr.quantity),0))
    },[cart]);


  

  return (
    <>
    {cart.length>0?
        <div className='py-32 w-full max-w-screen-xl  items-center  m-auto  '>
    
    <div>
        <h1 className='text-6xl font-semibold  text-gray-600 px-6'>Cart</h1>
    </div>
    <div className='flex mt-12 w-full justify-between items-center py-2 px-8 bg-slate-50 rounded-t-2xl'>
        <h3 className='text-3xl font-semibold text-gray-500 px-2 w-96'>PRODUCT</h3>
        <h3 className='text-3xl font-semibold text-gray-500 px-2 w-48'>QUANTITY</h3>
        <h3 className='text-3xl font-semibold text-gray-500 px-2 w-56'>PRICE</h3>
    </div>

    <div className='py-4 px-8 bg-slate-50 rounded-b-2xl'>
        

            {cart.map((item)=>(
            
            <div className='flex  w-full justify-between items-center py-4 ' key={item?.product?.id}>   
            <div className='flex items-center w-96 '>
            <img src={item?.product?.images[0] } className= ' h-24 w-24 rounded-full mx-4'/>
            <p className='text-2xl px-4 font-semibold text-gray-700 '> {item?.product?.title}</p>
            </div>

            <div className='flex items-center w-48'>
                <button className=' text-gray-600 hover:text-gray-800' 
                 onClick={()=>{
                    dispatch({
                        type:'REMOVE_QUANTITY',
                        payload:{...item}
                    })
                }} >
                    <AiFillMinusCircle className='text-6xl px-2  ' />
                </button>

                <p className='text-4xl font-bold px-2 text-gray-800'>{item?.quantity}</p>
          
                <button  className=' text-gray-600 hover:text-gray-800'
                onClick={()=>{
                    dispatch({
                        type:'ADD_QUANTITY',
                        payload:{...item}
                    })
                }} >
                    <AiFillPlusCircle className='text-6xl px-2' />
                </button>

            </div>

            <div className='flex items-center w-56 justify-between'>
                <h3 className='text-3xl font-semibold text-gray-500 px-2'>${(((item?.product.price -( item?.product.price * (item?.product.discountPercentage / 100 ))))*item?.quantity).toFixed(2)}</h3>
                <span className='px-2 text-4xl text-slate-500 hover:text-slate-800'>
                                <MdDelete onClick={()=>{
                                   
                                    dispatch({
                                    
                                    type:'REMOVE_FROM_CART',
                                payload: {...item}
                                    })
                                    }}/></span>
            </div>

            </div>
            )

    )}
            
        
        
        
       
    </div>

    <div className='flex mt-12 px-8 bg-slate-100 h-20 items-center justify-between rounded-2xl'>
        <h1 className='text-4xl text-gray-800 font-semibold'>TOTAL: ${total?.toFixed(2)}</h1>
        <button className='w-60 h-16 rounded-xl text-4xl font-semibold text-white bg-blue-600 hover:bg-blue-800'>CHECK OUT</button>
        
    </div>

    </div> 
    :
    <div className='py-32 w-full max-w-screen-xl flex  flex-col items-center justify-center h-screen  m-auto  '>
        <h1 className='text-7xl text-gray-600 font-semibold'>Cart is Empty!</h1>
        <p className='text-4xl text-white font-semibold px-4 rounded-2xl mt-16 bg-blue-400 h-20 items-center pt-4 cursor-pointer hover:bg-blue-700'><Link to={"/"}>Continue Shopping</Link></p>
    </div>
    }
    
    </>
  )
}

export default CartPage