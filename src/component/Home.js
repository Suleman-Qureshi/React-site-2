import React from 'react'
import Navlinks from './Navlinks'
import 'animate.css';
function Home() {
return (
  <div className='w-screen h-screen flex items-center px-44 max-lg:px-10 max-lg:justify-center max-lg:text-center'>
    <div className='flex flex-col text-white space-y-8 ml-12 max-lg:ml-0 max-lg:justify-center'>
      <h1 className='text-6xl font-semibold max-lg:text-7xl'>My Portfolio</h1>
      <p className=' text-neutral-300 text-2xl font-semibold tracking-wide'>I'm a passionate <span className='border-b border-green-500 text-white'>Web Developer</span> from Pakistan</p>
        <Navlinks/>
    <div className='flex space-x-8 text-white max-lg:justify-center max-lg:items-center'>
      <i className="fa-brands fa-github fa-xl bgTransparentGrey  px-3 py-4 max-lg:px-6 max-lg:py-8 rounded-full cursor-pointer hover:bg-green-500 duration-200"></i>
      <i className="fa-brands fa-facebook fa-xl bgTransparentGrey  px-3 py-4 rounded-full cursor-pointer hover:bg-green-500 duration-200"></i>
      <i className="fa-brands fa-instagram fa-xl bgTransparentGrey  px-3 py-4 rounded-full cursor-pointer hover:bg-green-500 duration-200"></i>
      <i className="fa-brands fa-linkedin fa-xl bgTransparentGrey  px-3 py-4 rounded-full cursor-pointer hover:bg-green-500 duration-200"></i>
    </div>
    </div>
  </div>
)}
export default Home