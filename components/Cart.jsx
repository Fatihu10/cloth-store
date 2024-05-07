import React, { useContext } from 'react'
import { BiArrowBack } from 'react-icons/bi'
import { Context } from '../utils/CartContext'
import CartCard from './CartCard'

const Cart = ({open, setOpen}) => {
  const {cart} = useContext(Context)
  
  const rodiat = e => {
    if(e.target === e.currentTarget){
      setOpen(false)
    }
  }
  
  return (
    <div onClick={rodiat} className={`fixed w-full flex justify-end h-screen duration-500 bg-black bg-opacity-60 top-0 ${open ? 'right-0' : 'right-[-100%]'}`}>
      <div className='w-[30%] overflow-y-auto bg-white h-full'>
        <div onClick={()=>setOpen(false)} className='flex gap-3 py-6 cursor-pointer px-4'>
          <div className='my-auto'><BiArrowBack size={20} /></div>
          <p className="font-bold text-xl">Cart</p>
          <p className="rounded-full bg-black flex justify-center items-center my-auto text-white h-5 w-5">{cart.length}</p>
        </div>
        <div className='px-3 flex flex-col gap-3'>
          {cart.map((item, i) => (
            <CartCard
              key={i}
              title={item?.title}
              image={item?.image}
              price={item?.price}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Cart