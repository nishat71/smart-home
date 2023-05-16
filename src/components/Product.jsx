import React from 'react'

const Product = ({product,handleAddToCart}) => {
  const { name, picture, price, category } = product
  
  return (
    <div className='p-6 bg-gray-100 rounded shadow-lg'>
      <img
        className='object-cover w-full h-56 mb-6 rounded shadow-lg md:h-64 xl:h-80'
        src={picture}
        alt=''
      />
      <p className='mb-2 text-xl font-bold leading-none sm:text-2xl'>{name}</p>
      <p className='text-gray-700 '>Category: {category}</p>
      <p className='font-bold text-gray-700'>Price: {price}$</p>
      
      <button
        onClick={()=>handleAddToCart(product)}
        type='button'
        className='block w-full px-8 py-3 mt-4 font-semibold text-gray-800 transition-colors duration-200 rounded-full bg-cyan-200 hover:bg-cyan-400'
      >
        Add To Cart
      </button>
    </div>
  )
}

export default Product
