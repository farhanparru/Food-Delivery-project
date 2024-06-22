/* eslint-disable no-unused-vars */
import React from 'react';
import '../App.css';
import { Link } from 'react-router-dom';
import {BiUser} from 'react-icons/bi'
import {AiOutlineUnlock} from 'react-icons/ai'
import { FiMail, FiLock } from 'react-icons/fi';
import { FaGoogle, FaGithub } from 'react-icons/fa';
const Signup = () => {
  return (
    <div className="signup-background text-white h-[100vh] flex justify-center items-center">
      <div className='bg-slate-800 border border-slate-400 rounded-md p-11 shadow-lg backdrop-filter backdrop-blur-sm bg-opacity-30 relative'>
        <h1 className='text-4xl text-white font-bold text-center mb-6'>Signup</h1>
        <form>
          <div className='relative my-4'>      
            <input type="text" id="fullname" name="fullname" className='block w-72 py-2 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'/>
            <label htmlFor="fullname" className='absolute text-base text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-9'> Full name</label>
            <BiUser className='absolute top-4 right-4'/>
          </div>

          <div className='relative my-4'>
            <input type="email" id="email" name="email" className='block w-72 py-2 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer' />
            <label htmlFor="email" className='absolute text-base text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Email</label>
            <FiMail className='absolute top-4 right-4'/>
          </div>

          <div className='relative my-4'>
            <input type="password" id="password" name="password" className='block w-72 py-2 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'/>
            <label htmlFor="password" className='absolute text-base text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Password</label>
            <AiOutlineUnlock className='absolute top-4 right-4'/>
          </div>

          <div className='relative my-4'>
            <input type="password" id="confirm-password" name="confirm-password" className='block w-72 py-2 px-0 text-sm text-white bg-transparent border-0 border-b-2 border-gray-300 appearance-none focus:outline-none focus:ring-0 focus:border-blue-600 peer'/>
            <label htmlFor="confirm-password" className='absolute text-base text-white duration-300 transform -translate-y-6 scale-75 top-3 -z-10 origin-[0] peer-focus:left-0 peer-focus:text-blue-600 peer-placeholder-shown:scale-100 peer-placeholder-shown:translate-y-0 peer-focus:scale-75 peer-focus:-translate-y-6'>Confirm Password</label>
            <FiLock className='absolute top-4 right-4'/>
          </div>

          <div className='flex items-center my-4'>
            <input type='checkbox' id='remember-me' name='remember-me' className='w-4 h-4 text-blue-600 bg-gray-100 border-gray-300 rounded focus:ring-blue-500'/>
            <label htmlFor='remember-me' className='ml-2 text-sm text-white'>Remember Me</label>
          </div>

          <button type='submit' className='w-full mb-4 text-[18px] mt-6 rounded-full bg-white text-emerald-800 hover:bg-emerald-600 hover:text-white py-2 transition-colors duration-300' >Signup</button>

          <div className='mt-4 text-sm'>
            <span>New Here? <Link to="/login" className='text-blue-500 hover:underline'>You already have an account</Link></span>
          </div>
        </form>
          <div className='mt-6'>
          <button className='w-full py-2 mt-4 flex justify-center items-center bg-red-600 text-white rounded-md hover:bg-red-700 focus:outline-none focus:ring-2 focus:ring-red-500 focus:ring-opacity-50'>
            <FaGoogle className='mr-2' /> Signup with Google
          </button>
          <button className='w-full py-2 mt-4 flex justify-center items-center bg-gray-800 text-white rounded-md hover:bg-gray-900 focus:outline-none focus:ring-2 focus:ring-gray-500 focus:ring-opacity-50'>
            <FaGithub className='mr-2' /> Signup with GitHub
          </button>
        </div>
      </div>
    </div> 
  );
};

export default Signup;
