import React, { useState } from 'react';
import { MdKeyboardArrowLeft, MdKeyboardArrowRight } from "react-icons/md";

const myImages = ['/images/boy1.png', '/images/boy2.png', '/images/boy3.png', '/images/boy4.png', '/images/boy5.png', '/images/boy6.png']

const CollectionHome = () => {
  const [show1, setShow1] = useState(0)
  const [show2, setShow2] = useState(1)

  const moveForward = () => {
    if(show1 == myImages.length-1){
      setShow1(0)
    }else{
      setShow1(show1+1)
    }
    if(show2 == myImages.length-1){
      setShow2(0)
    }else{
      setShow2(show2+1)
    }
  }
  

  const moveBackward = () => {
    if(show1 == 0){
      setShow1(myImages.length-1)
    }else{
      setShow1(show1-1)
    }
    if(show2 == 0){
      setShow2(myImages.length-1)
    }else{
      setShow2(show2-1)
    }
  }
  
  return (
    <div className='py-2 grid grid-cols-3'>
      <div className='px-2 py-4'>
        <p className='font-extrabold text-5xl'>New Collection</p>
        <p>summer</p>
        <p>2024</p>
        <div className='flex pt-5'>
          <button onClick={moveBackward} className='border border-myGray p-3 w-fit'><MdKeyboardArrowLeft /></button>
          <button onClick={moveForward} className='border border-myGray p-3 w-fit'><MdKeyboardArrowRight /></button>
          <p>Image 1 {show1}</p>
          <p>Image 2 {show2}</p>
        </div>
      </div>
      <div>
        <img src={myImages[show1]} alt="" />
      </div>
      <div>
        <img src={myImages[show2]} alt="" />
      </div>
    </div>
  )
}

export default CollectionHome