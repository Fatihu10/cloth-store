import React from 'react'
import { BiSearch } from 'react-icons/bi'
import CollectionHome from '../../components/CollectionHome'

const Home = () => {
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
    </div>
  )
}

export default Home