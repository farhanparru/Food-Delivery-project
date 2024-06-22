/* eslint-disable no-unused-vars */
import React from 'react'
import COVER_IMAGE from '../Image/login page cover.jpg'
const Login = () => {
  return (
    <div className='w-full min-h-screen flex items-center'>
     <div className='relative w-1/2 h-full flex flex-col'>
     <img src={COVER_IMAGE} alt='Image' className='w-full h-full'/>
     </div>
    </div>
  )
}

export default Login
