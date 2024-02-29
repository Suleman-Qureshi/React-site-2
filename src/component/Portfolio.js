import React from 'react'
import Navbar from './Navbar'
import img1 from '../recources/portfolio-1.jpg'
import img2 from '../recources/portfolio-2.jpg'
import img3 from '../recources/portfolio-3.jpg'
import img4 from '../recources/portfolio-4.jpg'
import img5 from '../recources/portfolio-5.jpg'
import img6 from '../recources/portfolio-6.jpg'
import img7 from '../recources/portfolio-7.jpg'
import img8 from '../recources/portfolio-8.jpg'
import img9 from '../recources/portfolio-9.jpg'
function Portolio() {
  return (
    <>
    <Navbar/>
    <section className='relative fadeUp scrollBarNone bgTransparentBlack top-16 p-3 w-3/4 h-5/6 overflow-y-auto space-y-5 animate__animated animate__slideInUp'>
    <div className='space-y-3'>
        <h3 className='text-white text-xl font-medium tracking-wide relative after:absolute after:w-40 after:mt-1 after:h-0.5 after:top-1/2 after:translate-x-2 after:-translate-y-1/2 after:bg-green-500'>Portfolio</h3>
        <p className='text-white text-4xl font-extrabold'>MY WORKS</p>
        <div className='flex justify-center items-center space-x-6 text-white font-semibold'>
              <button className='px-3 py-1.5 bg-green-500 rounded-lg'>ALL</button>
              <button className='px-3 py-1.5 bgTransparentGrey rounded-lg hover:bg-green-500 duration-200'>APP</button>
              <button className='px-3 py-1.5 bgTransparentGrey rounded-lg hover:bg-green-500 duration-200'>CARD</button>
              <button className='px-3 py-1.5 bgTransparentGrey rounded-lg hover:bg-green-500 duration-200'>WEB</button>
        </div>
        <div className='flex flex-col space-y-6 p-4 text-center'>
            <div className='flex max-md:flex-col max-md:space-x-0 max-md:space-y-6 space-x-6'>
                <div className='w-1/3 max-md:w-full relative'>
                    <span className='absolute w-full h-full scale-90 hover:scale-100 opacity-0 hover:opacity-100 bgTransparentBlack duration-300 before:absolute before:w-1/5 before:h-1/5 before:border-l-2 before:border-t-2  before:top-2 before:left-2 after:absolute after:w-1/5 after:h-1/5 after:border-r-2 after:border-b-2  after:bottom-2 after:right-2 flex justify-center items-center'>
                        <div className='flex flex-col space-y-4 text-white'>
                        <h5 className=' text-lg font-semibold'>APP 1</h5><p>App</p><i className="fa-solid fa-link fa-xl hover:text-green-500 cursor-pointer duration-100"></i>
                        </div>
                    </span>
                <img src={img1} alt="P_img_1"/>
                </div>
                <div className='w-1/3 max-md:w-full relative'>
                    <span className='absolute w-full h-full scale-90 hover:scale-100 opacity-0 hover:opacity-100 bgTransparentBlack duration-300 before:absolute before:w-1/5 before:h-1/5 before:border-l-2 before:border-t-2  before:top-2 before:left-2 after:absolute after:w-1/5 after:h-1/5 after:border-r-2 after:border-b-2  after:bottom-2 after:right-2 flex justify-center items-center'>
                        <div className='flex flex-col space-y-4 text-white'>
                        <h5 className=' text-lg font-semibold'>WEB 3</h5><p>Web</p><i className="fa-solid fa-link fa-xl hover:text-green-500 cursor-pointer duration-100"></i>
                        </div>
                    </span>
                <img src={img2} alt="P_img_1"/>
                </div>
                <div className='w-1/3 max-md:w-full relative'>
                    <span className='absolute w-full h-full scale-90 hover:scale-100 opacity-0 hover:opacity-100 bgTransparentBlack duration-300 before:absolute before:w-1/5 before:h-1/5 before:border-l-2 before:border-t-2  before:top-2 before:left-2 after:absolute after:w-1/5 after:h-1/5 after:border-r-2 after:border-b-2  after:bottom-2 after:right-2 flex justify-center items-center'>
                        <div className='flex flex-col space-y-4 text-white'>
                        <h5 className=' text-lg font-semibold'>APP 2</h5><p>App</p><i className="fa-solid fa-link fa-xl hover:text-green-500 cursor-pointer duration-100"></i>
                        </div>
                    </span>
                <img src={img3} alt="P_img_1"/>
                </div>
            </div>
            <div className='flex space-x-6 max-md:flex-col max-md:space-x-0 max-md:space-y-6'>
                <div className='w-1/3 max-md:w-full relative'>
                    <span className='absolute w-full h-full scale-90 hover:scale-100 opacity-0 hover:opacity-100 bgTransparentBlack duration-300 before:absolute before:w-1/5 before:h-1/5 before:border-l-2 before:border-t-2  before:top-2 before:left-2 after:absolute after:w-1/5 after:h-1/5 after:border-r-2 after:border-b-2  after:bottom-2 after:right-2 flex justify-center items-center'>
                        <div className='flex flex-col space-y-4 text-white'>
                        <h5 className=' text-lg font-semibold'>CARD 2</h5><p>Card</p><i className="fa-solid fa-link fa-xl hover:text-green-500 cursor-pointer duration-100"></i>
                        </div>
                    </span>
                <img src={img4} alt="P_img_1"/>
                </div>
                <div className='w-1/3 max-md:w-full relative'>
                    <span className='absolute w-full h-full scale-90 hover:scale-100 opacity-0 hover:opacity-100 bgTransparentBlack duration-300 before:absolute before:w-1/5 before:h-1/5 before:border-l-2 before:border-t-2  before:top-2 before:left-2 after:absolute after:w-1/5 after:h-1/5 after:border-r-2 after:border-b-2  after:bottom-2 after:right-2 flex justify-center items-center'>
                        <div className='flex flex-col space-y-4 text-white'>
                        <h5 className=' text-lg font-semibold'>WEB 2</h5><p>Web</p><i className="fa-solid fa-link fa-xl hover:text-green-500 cursor-pointer duration-100"></i>
                        </div>
                    </span>
                <img src={img5} alt="P_img_1"/>
                </div>
                <div className='w-1/3 max-md:w-full relative'>
                    <span className='absolute w-full h-full scale-90 hover:scale-100 opacity-0 hover:opacity-100 bgTransparentBlack duration-300 before:absolute before:w-1/5 before:h-1/5 before:border-l-2 before:border-t-2  before:top-2 before:left-2 after:absolute after:w-1/5 after:h-1/5 after:border-r-2 after:border-b-2  after:bottom-2 after:right-2 flex justify-center items-center'>
                        <div className='flex flex-col space-y-4 text-white'>
                        <h5 className=' text-lg font-semibold'>APP 3</h5><p>App</p><i className="fa-solid fa-link fa-xl hover:text-green-500 cursor-pointer duration-100"></i>
                        </div>
                    </span>
                <img src={img6} alt="P_img_1"/>
                </div>
            </div>
            <div className='flex space-x-6 max-md:flex-col max-md:space-x-0 max-md:space-y-6'>
                <div className='w-1/3 max-md:w-full relative'>
                    <span className='absolute w-full h-full scale-90 hover:scale-100 opacity-0 hover:opacity-100 bgTransparentBlack duration-300 before:absolute before:w-1/5 before:h-1/5 before:border-l-2 before:border-t-2  before:top-2 before:left-2 after:absolute after:w-1/5 after:h-1/5 after:border-r-2 after:border-b-2  after:bottom-2 after:right-2 flex justify-center items-center'>
                        <div className='flex flex-col space-y-4 text-white'>
                        <h5 className=' text-lg font-semibold'>CARD 1</h5><p>Card</p><i className="fa-solid fa-link fa-xl hover:text-green-500 cursor-pointer duration-100"></i>
                        </div>
                    </span>
                <img src={img7} alt="P_img_1"/>
                </div>
                <div className='w-1/3 max-md:w-full relative'>
                    <span className='absolute w-full h-full scale-90 hover:scale-100 opacity-0 hover:opacity-100 bgTransparentBlack duration-300 before:absolute before:w-1/5 before:h-1/5 before:border-l-2 before:border-t-2  before:top-2 before:left-2 after:absolute after:w-1/5 after:h-1/5 after:border-r-2 after:border-b-2  after:bottom-2 after:right-2 flex justify-center items-center'>
                        <div className='flex flex-col space-y-4 text-white'>
                        <h5 className=' text-lg font-semibold'>CARD 3</h5><p>Card</p><i className="fa-solid fa-link fa-xl hover:text-green-500 cursor-pointer duration-100"></i>
                        </div>
                    </span>
                <img src={img8} alt="P_img_1"/>
                </div>
                <div className='w-1/3 max-md:w-full relative'>
                    <span className='absolute w-full h-full scale-90 hover:scale-100 opacity-0 hover:opacity-100 bgTransparentBlack duration-300 before:absolute before:w-1/5 before:h-1/5 before:border-l-2 before:border-t-2  before:top-2 before:left-2 after:absolute after:w-1/5 after:h-1/5 after:border-r-2 after:border-b-2  after:bottom-2 after:right-2 flex justify-center items-center'>
                        <div className='flex flex-col space-y-4 text-white'>
                        <h5 className=' text-lg font-semibold'>WEB 3</h5><p>Web</p><i className="fa-solid fa-link fa-xl hover:text-green-500 cursor-pointer duration-100"></i>
                        </div>
                    </span>
                <img src={img9} alt="P_img_1"/>
                </div>
            </div>
        </div>
        </div>
    </section>
    </>
  )
}

export default Portolio