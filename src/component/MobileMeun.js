import React from 'react'
import { NavLink } from 'react-router-dom'
import 'animate.css';

function MobileMeun() {
    let mobile_menu=document.getElementById(`mobileNav`);
    let nav_links=document.querySelectorAll(`.nl`)
    function menuToggle(){
        mobile_menu.classList.toggle(`hidden`)
        mobile_menu.classList.toggle(`flex`)
        mobile_menu.classList.toggle(`animate__fadeIn`)
        nav_links.forEach((e)=>{
            e.addEventListener(`click`,()=>{
                mobile_menu.classList.add(`hidden`)
        mobile_menu.classList.remove(`flex`)
        mobile_menu.classList.remove(`animate__fadeIn`)
            })
        })
    }

    return (
<>
    <span className='absolute right-2 top-2 hidden max-lg:flex z-20'>
    <i id='ham_burger' className="fa-solid fa-bars fa-2x text-green-500 p-3 bgTransparentBlack rounded-2xl cursor-pointer " onClick={menuToggle}></i>
    </span>
    <div id='mobileNav' className=' w-11/12 h-11/12 py-12 ml-2 top-10 px-5  absolute rounded-lg z-10 bgTransparentBlack border hidden animate__animated' >
    <ul className='flex flex-col justify-center space-y-12 text-xl font-semibold' id='nav_links'>         
<NavLink to='/' className={({isActive})=>`hover:text-white nl ${isActive?"text-white activeLink before:w-2/5":" text-neutral-300 before:w-0 navLink"} cursor-pointer relative hover:before:w-2/5 before:bg-green-500 before:-bottom-2 hover:no-underline`}>Home</NavLink>
<NavLink to='/about' className={({isActive})=>`hover:text-white nl ${isActive?"text-white activeLink before:w-2/5":" text-neutral-300 before:w-0 navLink"} cursor-pointer relative hover:before:w-2/5 before:bg-green-500 before:-bottom-2 hover:no-underline`}>About</NavLink>
<NavLink to='/Resume' className={({isActive})=>`hover:text-white nl ${isActive?"text-white activeLink before:w-2/5":" text-neutral-300 before:w-0 navLink"} cursor-pointer relative hover:before:w-2/5 before:bg-green-500 before:-bottom-2 hover:no-underline`}>Resume</NavLink>
<NavLink to='/Services' className={({isActive})=>`hover:text-white nl ${isActive?"text-white activeLink before:w-2/5":" text-neutral-300 before:w-0 navLink"} cursor-pointer relative hover:before:w-2/5 before:bg-green-500 before:-bottom-2 hover:no-underline`}>Services</NavLink>
<NavLink to='/Portfolio' className={({isActive})=>`hover:text-white nl ${isActive?"text-white activeLink before:w-2/5":" text-neutral-300 before:w-0 navLink"} cursor-pointer relative hover:before:w-2/5 before:bg-green-500 before:-bottom-2 hover:no-underline`}>Portfolio</NavLink>
<NavLink to='/Contact' className={({isActive})=>`hover:text-white nl ${isActive?"text-white activeLink before:w-2/5":" text-neutral-300 before:w-0 navLink"} cursor-pointer relative hover:before:w-2/5 before:bg-green-500 before:-bottom-2 hover:no-underline`}>Contact</NavLink>
</ul>
    </div>
</>
  )
}
export default MobileMeun