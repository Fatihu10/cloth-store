import React, { useEffect, useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import CollectionHome from '../../components/CollectionHome'
import ProductCard from '../../components/ProductCard'
import axios from 'axios'

const Home = () => {
  const [myProduct, setMyProduct] = useState([])

  const callApi = async() => {

    const res = await axios.request({
      method: 'GET',
      url: 'https://fakestoreapi.com/products'
    })
    setMyProduct(res.data)

  }

  useEffect(()=>{
    callApi()
  },[])
  
  return (
    <div className='px-20'>
      <div>
        <p>MEN</p>
        <p>WOMEN</p>
        <p>KIDS</p>
        <div className='w-[300px] flex bg-myGray px-6 py-2'>
          <div className='text-gray-800 my-auto'><BiSearch /></div>
          <input className='w-full bg-transparent outline-none text-right' placeholder='Search' type="text" />
        </div>
      </div>
      <CollectionHome />
      <div className="py-10 w-full flex-wrap flex gap-3">
        {myProduct.map((item, i)=>(
          <ProductCard
            key={i}
            item={item}
          />
        ))}
      </div>
    </div>
  )
}

export default Home