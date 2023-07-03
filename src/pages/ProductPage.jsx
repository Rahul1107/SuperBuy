import React, { useState } from 'react'
import products from '../utils/products'
import { Link, useParams } from 'react-router-dom'
import { AiFillPlusCircle } from 'react-icons/ai';
import { AiFillMinusCircle } from 'react-icons/ai';
import { CartState } from '../context/Context';



const ProductPage = () => {
  const items =[...products]
  const [mainImage, setMainImage] = useState('0');
  const [quantity, setQuantity] = useState(1);
  
  const productId = useParams().id
  const product = (items.filter((item)=>{
    return item.id == productId;
  }))[0]
  

  const currentPrice = (product.price -( product.price * (product.discountPercentage / 100 )))

  const {
    state: {cart},
    dispatch,
  } = CartState();

  return (
    <div className='py-32 w-full max-w-screen-xl  items-center  m-auto  '>
      <div className='flex flex-wrap bg-slate-50 rounded-xl justify-center'>
        <div className='flex flex-col'>
          <div className=' flex pt-12 px-12'>
            <img src={product.images[mainImage]} className='h-[340px] md:h-[440px] md:w-[440px] w-[340px] rounded-xl shadow-xl'/>
          </div>
          <div className=' flex py-8 px-12 w-full justify-between'>
        
          {
            product.images.map((images, index)=>{
              return(
                <img src={images}  className='h-[60px] w-[60px]  md:h-[72px] md:w-[72px] rounded-full shadow-xl cursor-pointer hover:border-2 border-blue-500' key={images} onClick={()=>{
            setMainImage(index)}}/>
              )
            })
          
          }
          </div>
          
        </div>
        <div className='pt-12 px-8'>

          <h1 className='text-5xl text-gray-700 truncate font-semibold py-2'>{product.title}</h1>
          <h3 className='text-4xl text-gray-400 truncate font-semibold py-2'>{product.brand}</h3>
          <p className='text-3xl text-gray-600 font-semibold pt-12'>Description :</p>
          <p className='text-2xl text-gray-600 font-semibold py-2 line-clamp-4 w-[500px]'>{product.description}</p>
          <p className='text-4xl text-gray-700 truncate font-semibold pt-12'>Price</p>
        
          <div className='flex items-center'>

            <p className='text-4xl text-gray-800 truncate font-semibold py-4 px-2'>${currentPrice.toFixed(2)}</p>
            <p className='text-3xl text-gray-600 truncate font-semibold py-4 px-2 line-through'>${product.price}</p>
            <p className='text-3xl text-green-600 truncate font-semibold py-4 px-1  '>
            {product.discountPercentage}%</p>

          </div>
          
          <p className='text-4xl text-gray-700 truncate font-semibold pt-12'>Quantity</p>
          <div className='pt-4 flex items-center '>

          <button 
          onClick={()=>{
            if(quantity>1){
              setQuantity(quantity-1);
            }
          }}
          disabled={cart.some(p=> p.product.id == product.id)} 
          className='disabled:hidden text-gray-600 hover:text-gray-800' >
          <AiFillMinusCircle className='text-7xl px-2  ' />
          </button>

          <p className='text-5xl font-bold px-2 text-gray-800'>{quantity}</p>
          
          <button onClick={()=>{
            if(quantity< product.stock){
              setQuantity(quantity+1 );
            }
            
          }}
          disabled={cart.some(p=> p.product.id == product.id)} className='disabled:hidden text-gray-600 hover:text-gray-800' >
          <AiFillPlusCircle className='text-7xl px-2' 
             
          />
          </button>


          </div>
          <p className='text-4xl text-gray-700 truncate font-semibold pt-4'>Subtotal : $ {(currentPrice * quantity).toFixed(2)}</p>
          


          <div className='pt-12 '>

          {cart.some(p=> p.product.id == product.id)?(
            <>
            <button className='w-80 h-20 bg-orange-400 text-3xl rounded-2xl font-semibold text-white hover:bg-orange-600 shadow-xl mx-4'
            onClick={()=>{
                
                dispatch({
                  type:'REMOVE_FROM_CART',
                  payload: {product},
                })
                
              }}
            >
            REMOVE FROM CART 

            </button>

            <button className='w-80 h-20 bg-green-500 text-3xl rounded-2xl font-semibold text-white hover:bg-green-700 shadow-xl mx-8'>
            <Link to={"/cart"}>GO TO CART </Link>
              </button> 
              </>
            ):(
              
              <button className='w-80 h-20 bg-blue-500 text-3xl rounded-2xl font-semibold text-white hover:bg-blue-700 shadow-xl mx-8 '
              onClick={()=>{
                
              dispatch({
                type:'ADD_TO_CART',
                payload: {product , quantity},
              })
              
            }}>
              ADD TO CART 
              </button>
              
              )}
            
              

          
          </div>


        </div>
      </div>
      
    </div>
  )
}

export default ProductPage