import React, { useEffect, useState } from 'react'
import ProductCard from './ProductCard';
import { Link } from 'react-router-dom';

const SameCategory = ({category}) => {
  const [sameCategory, setSameCategory] = useState([]);

  async function fetchProduct(){
    const res = await fetch('https://fakestoreapi.com/products')
    const response = await res.json()
    console.log(category)
    let theCatetory = []
    response.map((each)=>{
      if(each.category == category){
        theCatetory.push(each)
      }
    })
    setSameCategory(theCatetory)
  }

  useEffect(()=>{
    fetchProduct()
  },[])
  
  return (
    <div className='px-20 flex gap-5 flex-wrap py-10'>
      {sameCategory.map((item, index)=>(
        <Link key={index} to={'/product/'+item?.id}>
          <ProductCard item={item} />
        </Link>
      ))}
    </div>
  )
}

export default SameCategory