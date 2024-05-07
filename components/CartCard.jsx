import React from 'react'

const CartCard = ({image, title, price}) => {
  return (
    <div className='h-[100px] flex justify-between rounded-md border border-neutral-400 shadow-sm overflow-hidden'>
      <div className="flex gap-5">
        <div className='h-full w-[100px]'><img src={image} alt="" /></div>
        <p className="font-bold my-auto text-[8px]">{title}</p>
      </div>
      <div className='my-auto'>
        <p className="font-bold text-neutral-700">N{price}</p>
      </div>
    </div>
  )
}

export default CartCard