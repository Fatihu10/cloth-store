import React, { useEffect, useState } from 'react'
import { BiSearch } from 'react-icons/bi'
import CollectionHome from '../../components/CollectionHome'
import ProductCard from '../../components/ProductCard'
import axios from 'axios'

const Home = () => {
  const [myProduct, setMyProduct] = useState([])
  const [menCategory, setMenCategory] = useState([])

  async function callApi(){

    const res = await fetch('https://fakestoreapi.com/products')
    const response = await res.json()
    setMyProduct(response)
    
    let dummyCloth = []
    for(let i=0; i<=response?.length; i++){
      if(response[i]?.category == "men's clothing"){
        dummyCloth.push(response[i])
      }
    }
    console.log(dummyCloth)
    setMenCategory(dummyCloth)
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

      <div className='pt-20'>
        <p className="text-4xl font-bold">Men Clothing Category</p>
        <div className='flex gap-5 flex-wrap py-10'>
          {menCategory.map((itm, i) => (
            <ProductCard
              key={i}
              item={itm}
            />
          ))}
        </div>
      </div>
    </div>
  )
}

export default Home