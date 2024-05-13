import React, { useEffect, useState } from 'react'
import { useParams } from 'react-router-dom'

const ProductView = () => {
  const [singleProduct, setSingleProduct] = useState(null)
  const { id } = useParams()

  const gettingSingleProduct = async () => {
    const res = await fetch('https://fakestoreapi.com/products/'+id)
    const response = await res.json()
    setSingleProduct(response)
    console.log(response)
  }

  useEffect(()=>{
    gettingSingleProduct()
  },[])
  
  return (
    <div className='py-10'>
      <div className='px-28 flex gap-5'>
        <div className='w-[300px] h-[350px]'><img className='w-full' src={singleProduct?.image} alt="" /></div>
        <div>
          <div>
            <p className="text-bold text-4xl">{singleProduct?.title}</p>
            <p className="text-gray-400">{singleProduct?.description}</p>
          </div>
          <div className='flex gap-10 justify-center'>
            <p className="font-semibold text-xl">N{singleProduct?.price}</p>
            <button className='w-fit bg-black text-white py-2 rounded-full px-10'>Add to cart</button>
          </div>
        </div>
      </div>
    </div>
  )
}

export default ProductView