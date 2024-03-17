import React, { useState } from 'react'
import { NavLink } from 'react-router-dom'
import { IoBagHandleOutline } from "react-icons/io5";
import { MdMenu } from "react-icons/md";
import { RxCross2 } from "react-icons/rx";
import { useSelector } from 'react-redux';

function Navbar() {
  const [menuIcon, setMenuIcon] = useState( )
  const cartProducts = useSelector(state => state.cart)

  const closeHandler = () => {
    setMenuIcon(false); 
  }

  const toggleMenu = () => {
    setMenuIcon(!menuIcon)
  }

  const navLinkClick = () => {
    setMenuIcon(false)
  }

  return (
    <nav className={`fixed w-full py-[0.7vw] z-10 top-0 ${menuIcon ? "active" : "navbar"} shadow-xl bg-slate-100`}>
  <div className="mx-auto max-w-7xl px-2 sm:px-6 lg:px-8">
    <div className="relative flex h-16 items-center justify-between">
    {/*   <div className="absolute inset-y-0 left-0 flex items-center sm:hidden">
        
        <button type="button" className="relative inline-flex items-center justify-center rounded-md p-2 text-black hover:bg-gray-700 hover:text-white focus:outline-none focus:ring-2 focus:ring-inset focus:ring-white" aria-controls="mobile-menu" aria-expanded="false">
          <span className="absolute -inset-0.5"></span>
          <span className="sr-only">Open main menu</span>
          
          <svg className="block h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
          </svg>
          
          <svg className="hidden h-6 w-6" fill="none" viewBox="0 0 24 24" stroke-width="1.5" stroke="currentColor" aria-hidden="true">
            <path stroke-linecap="round" stroke-linejoin="round" d="M6 18L18 6M6 6l12 12" />
          </svg>
        </button>
      </div> */}
      <div className="flex flex-1 items-center justify-center sm:items-stretch sm:justify-start">
        <div className="flex flex-shrink-0 items-center">
          <h1 className='text-black font-semibold sm:text-[1.5vw] text-[3vw]'><span className='text-yellow-700 sm:text-[1.8vw] text-[3vw]'>Sanjh</span>Ecommerce</h1>
        </div>
        <div className={`hidden sm:ml-6 sm:block`}>
          <div className="flex space-x-4 ml-[10vw]">
            <NavLink to="/" className="text-gray-700 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-semibold text-[1.21vw]" aria-current="page">Home</NavLink>
             <NavLink to="/products" className="text-gray-700 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium text-[1.21vw]">Products</NavLink>
             <NavLink to="/about" className="text-gray-700 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium text-[1.21vw]">About</NavLink>
             <NavLink to="/contact" className="text-gray-700 hover:bg-gray-700 hover:text-white rounded-md px-3 py-2 text-sm font-medium text-[1.21vw]">Contact</NavLink>
          </div>
        </div>
      </div>
      
      <div className='flex items-center justify-center mr-[1vw]'>
          <NavLink to="/cart" className="flex items-center text-gray-600 hover:text-yellow-500">
             <IoBagHandleOutline className='sm:text-[1.55vw] text-[3.5vw]'/> <h1 className='sm:text-[1.25vw] text-[3.3vw]'>:{cartProducts ? cartProducts.length : 0}</h1>
             </NavLink>
             </div>
    </div>
  </div>

  
  <div className="sm:hidden relative">
    <MdMenu onClick={toggleMenu} className='text-[5vw] absolute top-[-8.5vw] left-[2vw] sm:hidden cursor-pointer inline-block z-[999] res-nav-icon'/>
    <RxCross2 onClick={closeHandler} className='text-[5vw]  absolute top-[-8.5vw] left-[2vw] sm:hidden hidden cursor-pointer res-nav-icon close-icon'/>
    <div className={`space-y-1 px-2 pb-3 pt-2 text-center ${menuIcon ? "block" : "hidden"}`}>
      <NavLink to="/" onClick={navLinkClick} className="text-gray-700 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium" aria-current="page">Home</NavLink>
      <NavLink to="/products" onClick={navLinkClick} className="text-gray-700 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Products</NavLink>
      <NavLink to="/about" onClick={navLinkClick} className="text-gray-700 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">About</NavLink>
      <NavLink to="/contact" onClick={navLinkClick} className="text-gray-700 hover:bg-gray-700 hover:text-white block rounded-md px-3 py-2 text-base font-medium">Contact</NavLink>
    </div>
  </div>
</nav>

  )
}

export default Navbar
