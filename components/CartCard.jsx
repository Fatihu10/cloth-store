import React, { useState } from 'react'
import { BiTrash } from 'react-icons/bi'

const CartCard = ({image, title, price}) => {
  const [quantity, setQuantity] = useState(1)

  const increaseQuantity = () => {
    setQuantity(quantity+1)
  }

  const decreaseQuantity = () => {
    if(quantity <= 1){
      setQuantity(1)
    } else {
      setQuantity(quantity-1)
    }
  }
  
  return (
    <div className='h-[100px] flex justify-between rounded-md border border-neutral-400 shadow-sm overflow-hidden'>
      <div className="flex gap-5">
        <div className='h-full w-[100px]'><img src={image} alt="" /></div>
        <div className='my-auto'>
          <p className="font-bold my-auto text-[8px]">{title}</p>
          <div className='flex gap-2 bg-gray-100 justify-between font-bold rounded-full py-1 px-2'>
            <button onClick={decreaseQuantity}>-</button>
            <p>{quantity}</p>
            <button onClick={increaseQuantity}>+</button>
          </div>
        </div>
      </div>
      <div className='my-auto px-3'>
        <p className="font-bold text-xs text-neutral-700">N{price}</p>
        <button className='py-2 text-neutral-800 hover:text-neutral-500'><BiTrash /></button>
        <p className="font-bold text-neutral-700">N{price*quantity}</p>
      </div>
    </div>
  )
}

export default CartCard