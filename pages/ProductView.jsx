import React, { useEffect, useState } from 'react'
import { Link, useParams } from 'react-router-dom'
import SameCategory from '../components/SameCategory'
import ProductCard from '../components/ProductCard';

const ProductView = () => {
  const [singleProduct, setSingleProduct] = useState(null);
  const [sameProduct, setSameProduct] = useState([])
  const [all, setAll] = useState([])
  const { id } = useParams();

  const gettingSingleProduct = async () => {
    const res = await fetch('https://fakestoreapi.com/products/'+id)
    const response = await res.json()
    setSingleProduct(response)
  }

  const fetchAllProduct = async() => {
    const res = await fetch('https://fakestoreapi.com/products')
    const response = await res.json()
    setAll(response)
  }

  useEffect(()=>{
    let data = []
    all.map(item => {
      if(item?.category == singleProduct?.category){
        data.push(item)
      }
    })
    setSameProduct(data)
  },[singleProduct])
  
  useEffect(()=>{
    gettingSingleProduct()
    fetchAllProduct()
  },[id])
  
  return (
    <div className='py-10'>
      <div className='px-28 grid grid-cols-2 gap-5'>
        <div className='w-[300px] h-[350px]'><img className='w-full h-full' src={singleProduct?.image} alt="" /></div>
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
      <div className='py-10 px-20 flex flex-wrap gap-5'>
        {sameProduct.map((itm, index)=>(
          <Link key={index} to={'/product/'+itm?.id}>
            <ProductCard item={itm} />
          </Link>
        ))}
      </div>
    </div>
  )
}

export default ProductView