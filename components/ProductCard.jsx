import React, { useContext } from 'react'
import { Context } from '../utils/CartContext'

const ProductCard = ({item}) => {
  const { cart, setCart } = useContext(Context)
  
  const addItemCart = (id) => {
    if(cart.length >= 1){
      let dumyCart = []
      cart.map(product => {
        if(product.id !== id){
          dumyCart.push(product)
          let newCart = [...dumyCart, item]
          setCart(newCart)
        }
      })
    } else {
      let newCart = [...cart, item]
      setCart(newCart)
    }
    
    // if(cart.length >=1){
    //   let anotherCart = []
    //   cart.map(product => {
    //     if(product.id !== id){
    //       anotherCart.push(product)
    //       let newCart = [...anotherCart, item]
    //       setCart(newCart)
    //     }
    //   })
    // } else {
    //   const newCart = [...cart, item]
    //   setCart(newCart)
    // }
  }
  
  return (
    <div className='w-[250px] shadow-md'>
      <div className='h-[150px] overflow-hidden w-full'><img src={item?.image} alt="" /></div>
      <div className='flex justify-between px-2 py-4 gap-2'>
        <p className="font-bold text-base">{item?.title}</p>
        <p className="font-semibold text-sm text-neutral-600">N{item?.price}</p>
      </div>
      <button onClick={()=>addItemCart(item?.id)} className='w-full bg-black text-white py-2 rounded-full'>Add to cart</button>
    </div>
  )
}

export default ProductCard