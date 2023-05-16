import React, { useContext } from 'react'

import { Link } from 'react-router-dom'
import { CartContext } from './Root'
import CartItem from './CartItem'
import { deleteShoppingCart, removeFromDb } from '../utils/fakeDB'
import { toast } from 'react-toastify'

const Cart = () => {
  const [cart,setCart] = useContext(CartContext)
  // console.log('cart', cart);


  const handleRemoveItem = (id)=>{
    // console.log('id',id);
    const remaining = cart.filter((product)=> product.id !== id)
    setCart(remaining);
    removeFromDb(id);
    toast.warning('product deleted', {autoClose:500})
  }


  let total = 0;
  for(const product of cart){
    total = total + product.price * product.quantity;
  }

  const clearCart = ()=>{
   if(cart.length){
    setCart([]);
    deleteShoppingCart();
    return  toast.success('Order Placed', {autoClose:500})
   }
   else{
    return toast.error("Cart is Empty!", {autoClose:500})
   }
   
  }

  return (
    <div className='flex items-start justify-center min-h-screen text-gray-900 bg-gray-100'>
      <div className='flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 '>
        <h2 className='text-xl font-semibold'>
          {cart.length ? 'Review Cart Items' : 'Cart is EMPTY!'}
        </h2>
        <ul className='flex flex-col divide-y divide-gray-700'>

    {
      cart.map((product)=> <CartItem key={product.id} product={product} handleRemoveItem={handleRemoveItem}></CartItem>)
    }

          
        </ul>
        <div className='space-y-1 text-right'>
          <p>
            Total amount: <span className='font-semibold'>{total}$</span>
          </p>
          <p className='text-sm text-gray-400'>
            Not including taxes and shipping costs
          </p>
        </div>
        <div className='flex justify-end space-x-4'>
          <Link to='/shop'>
            <button
              type='button'
              className='px-6 py-2 border rounded-full border-cyan-400'
            >
              Back <span className='sr-only sm:not-sr-only'>to shop</span>
            </button>
          </Link>
          <button
            type='button'
            onClick={clearCart}
            className='px-6 py-2 font-semibold text-gray-800 border rounded-full hover:bg-cyan-400 bg-cyan-200'
          >
            Place Order
          </button>
        </div>
      </div>
    </div>
  )
}

export default Cart
// import React, { useContext } from 'react'

// import { Link } from 'react-router-dom'
// import { CartContext } from './Root'
// import CartItem from './CartItem'

// const Cart = () => {
//   const [cart,setCart] = useContext(CartContext)
//   console.log('cart', cart);

//   return (
//     <div className='flex items-start justify-center min-h-screen text-gray-900 bg-gray-100'>
//       <div className='flex flex-col max-w-3xl p-6 space-y-4 sm:p-10 '>
//         <h2 className='text-xl font-semibold'>
//           {cart.length ? 'Review Cart Items' : 'Cart is EMPTY!'}
//         </h2>
//         <ul className='flex flex-col divide-y divide-gray-700'>

//     {
//       cart.map((product)=> <CartItem key={product.id} product={product}></CartItem>)
//     }

          
//         </ul>
//         <div className='space-y-1 text-right'>
//           <p>
//             Total amount: <span className='font-semibold'>00$</span>
//           </p>
//           <p className='text-sm text-gray-400'>
//             Not including taxes and shipping costs
//           </p>
//         </div>
//         <div className='flex justify-end space-x-4'>
//           <Link to='/shop'>
//             <button
//               type='button'
//               className='px-6 py-2 border rounded-full border-cyan-400'
//             >
//               Back <span className='sr-only sm:not-sr-only'>to shop</span>
//             </button>
//           </Link>
//           <button
//             type='button'
//             className='px-6 py-2 font-semibold text-gray-800 border rounded-full hover:bg-cyan-400 bg-cyan-200'
//           >
//             Place Order
//           </button>
//         </div>
//       </div>
//     </div>
//   )
// }

// export default Cart
