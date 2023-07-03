import React, { useState } from 'react'
import { useParams } from 'react-router-dom'
import products from '../utils/products'
import ProductCard from '../components/ProductCard'


const Category = () => {

  const urlParam = useParams()
  const category = urlParam.id.trim().toLowerCase();
  let itemlist = []
  let sortedItems = []
  const [sortBy , setSortBy] = useState("highestRated")

  const mensFashion = ['mens-shirts','mens-shoes','mens-watches','sunglasses']
  const womensFashion = ['tops','womens-dresses','womens-shoes','womens-watches','womens-bags','womens-jewellery']
 
  const items = [...products]

  switch (category) {
    case 'all':

      itemlist =items;
      break;

    case 'automotive':
   

      itemlist = items.filter(product =>{
        return (
          (product.category === 'automotive' || product.category === 'motorcycle')
        )
      })
      break;
    
      case 'electronics':
        

        itemlist = items.filter(product =>{
          return (
            (product.category === 'laptops' || product.category === 'smartphones')
          )
        })
        break;
      
      case 'mens fashion':
        

        itemlist = items.filter(product =>{
          console.log(product.category)
          return (
            mensFashion.includes(product.category)
            
          ) 
        })
        break;

      case 'womens fashion':
        

        itemlist = items.filter(product =>{
          return (
            womensFashion.includes(product.category)
            ) 
          })
          break;
      
      case 'grocery':
       

        itemlist = items.filter(product =>{
          return(
            product.category === 'groceries'
          )
        })
        break;
      
      case 'home & furniture':
        

        itemlist = items.filter(product =>{
          return(
            product.category === 'home-decoration' || product.category === 'furniture'
          )
        })
        break;
      
      case 'personal care':

        itemlist = items.filter(product =>{
          return(
            product.category === 'fragrances' || product.category === 'skincare'
          )
        })
        break;
      
      default:

        itemlist = [];
  }

  switch(sortBy) {
    case 'lowest':
      sortedItems = itemlist.sort((a,b)=>{
        return (a.price - b.price)
      });
      break;

    case 'highest':
      sortedItems = itemlist.sort((a,b)=>{
        return (b.price - a.price)
      });
      break;
    
    case 'highestRated':
      sortedItems = itemlist.sort((a,b)=>{
        return (b.rating - a.rating)
      });
      break;
      
    case 'lowestRated':
      sortedItems = itemlist.sort((a,b)=>{
        return (a.rating - b.rating)
      });
      break;

    case 'aToZ':
      sortedItems = itemlist.sort((a,b)=>{
        return (a.title.localeCompare(b.title))
      });
      break;

    case 'zToA':
      sortedItems = itemlist.sort((a,b)=>{
        return (b.title.localeCompare(a.title))
      });
      break;

  }




  return (
    <div className='py-32 w-full max-w-screen-xl  items-center  m-auto  '>
      <div className='flex items-center gap-12'>
        <select name='Sort' value={sortBy} 
        onChange={e=> setSortBy(e.target.value)} className='text-2xl mx-8 md:mx-24 lg:mx-32 font-semibold text-gray-600 bg-slate-100 rounded-2xl h-12'>
        {console.log(sortBy)}
          <option value='lowest' className='text-md '>Price Low to High</option>
          <option value='highest' className='text-md '>Price High to Low</option>
          <option value='highestRated' className='text-md '  >Highest Rated </option>
          <option value='lowestRated' className='text-md ' >Lowest Rated </option>
          <option value="aToZ" className='text-md '>A-Z</option>
          <option value="zToA" className='text-md '>Z-A</option>
        </select>

        <h1 className=' text-4xl font-semibold text-gray-600'>{urlParam.id}</h1>
      </div>
      <div className='flex w-full flex-wrap pt-20 gap-0 justify-center'>
      { !sortedItems ? null : 
      sortedItems.map((item) =>{
        return(
        <ProductCard product={item} key={item.id} />
        )
      })
    }

      </div>
    </div>
  )
}

export default Category