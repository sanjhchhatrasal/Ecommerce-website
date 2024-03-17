import React from 'react'
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <div className='sm:h-[50vh] w-full bg-gray-700 px-[5vw] py-[5vw] sm:py-0 text-white'>
      <div className="top sm:flex block items-center justify-between h-[80%]">
        <div className="intro sm:w-[20%] mb-4">
            <h6 className='font-bold sm:mb-4'>Sanjh Chhatrasal</h6>
            <p className='text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, doloribus.</p>
        </div>
        <div className="mail sm:w-[20%] mb-4">
            <h6 className='font-bold sm:mb-4'>Contact to get connected</h6>
            <p className='text-gray-300'>sanjhchhatrasal@gmail.com</p>
        </div>
        <div className="follow mb-4">
            <h6 className='font-bold sm:mb-4'>Follow Us</h6>
            <div className="icons flex gap-3 sm:text-[1.4vw] text-gray-300">
                <NavLink to=""><FaDiscord /></NavLink>
                <NavLink to=""><FaInstagram/></NavLink>
                <NavLink to=""><FaLinkedin /></NavLink>
            </div>
        </div>
        <div className="mobile mb-4">
            <h6 className='font-bold sm:mb-4'>Call Us</h6>
            <p className='text-gray-300'>+91 123456789</p>
        </div>
      </div>
      <div className="bottom border-t-2 border-white h-[20%] flex justify-between items-center">
        <p>@2024 SanjhChhatrasal. All Rights Reserved</p>
        <p>PRIVACY POLICY , TERMS & CONDITIONS</p>
      </div>
    </div>
  )
}

export default Footer
