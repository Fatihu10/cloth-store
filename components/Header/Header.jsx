import React, { useContext, useState } from 'react';
import { BiMenuAltLeft } from "react-icons/bi";
import { Link } from 'react-router-dom';
import { FaRegHeart } from "react-icons/fa";
import { FiShoppingBag } from "react-icons/fi";
import { PiUser } from "react-icons/pi";
import Cart from '../Cart';
import { Context } from '../../utils/CartContext';

const Header = () => {
  const { cart } = useContext(Context)
  const [cartOpen, setCartOpen] = useState(false)
  
  return (
    <div className='py-3 flex justify-between w-full overflow-hidden px-20'>
      <div className='flex my-auto gap-3'>
        <div className='my-auto cursor-pointer'><BiMenuAltLeft size={20} /></div>
        <ul className='flex gap-5'>
          <Link to='/'>Home</Link>
          <Link to='/collection'>Collections</Link>
          <Link to='/new'>New</Link>
        </ul>
      </div>

      <div className='flex gap-10 my-auto'>
        <div className='bg-black h-fit text-white p-3 rounded-full'><FaRegHeart /></div>
        <div onClick={()=>setCartOpen(!cartOpen)} className='flex cursor-pointer'>
          <p className='py-2 px-4 rounded-full bg-black text-white h-fit'>{cart.length}</p>
          <div className=' border-black border-[5px] rounded-full h-[40px] w-[40px] flex justify-center items-center'><FiShoppingBag size={15} /></div>
        </div>
        <div className='bg-black h-fit text-white p-3 rounded-full'><PiUser /></div>
      </div>
      <Cart
        open={cartOpen}
        setOpen={setCartOpen}
      />
    </div>
  )
}

export default Header