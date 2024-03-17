import React from 'react'
import { FaDiscord } from "react-icons/fa";
import { FaInstagram } from "react-icons/fa";
import { FaLinkedin } from "react-icons/fa6";
import { NavLink } from 'react-router-dom';

function Footer() {
  return (
    <div className='sm:h-[50vh] w-full bg-gray-700 sm:px-[5vw] px-[6vw] py-[9vw] sm:py-0 text-white'>
      <div className="top sm:flex block items-center justify-between h-[80%]">
        <div className="intro sm:w-[20%] sm:mb-4 mb-7">
            <h6 className='font-bold sm:mb-4'>Sanjh Chhatrasal</h6>
            <p className='text-gray-300'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Eius, doloribus.</p>
        </div>
        <div className="mail sm:w-[20%] sm:mb-4 mb-7">
            <h6 className='font-bold sm:mb-4'>Contact to get connected</h6>
            <p className='text-gray-300'>sanjhchhatrasal@gmail.com</p>
        </div>
        <div className="follow sm:mb-4 mb-7">
            <h6 className='font-bold sm:mb-4'>Follow Us</h6>
            <div className="icons flex gap-3 sm:text-[1.4vw] text-gray-300 hover:text-white">
                <NavLink to="https://discord.com/channels/@me"><FaDiscord /></NavLink>
                <NavLink to="https://www.instagram.com/"><FaInstagram/></NavLink>
                <NavLink to="https://www.linkedin.com/in/sanjh-chhatrasal-663b66262/?originalSubdomain=in"><FaLinkedin /></NavLink>
            </div>
        </div>
        <div className="mobile sm:mb-4 mb-7">
            <h6 className='font-bold sm:mb-4'>Call Us</h6>
            <p className='text-gray-300'>+91 123456789</p>
        </div>
      </div>
      <div className="bottom border-t-2 border-white h-[20%] flex justify-between items-center">
        <p className='sm:text-[1vw] text-[2.8vw] sm:mr-0 mr-[8vw]'>@2024 SanjhChhatrasal. All Rights Reserved</p>
        <p className='sm:text-[1vw] text-[2.8vw]'>PRIVACY POLICY , TERMS & CONDITIONS</p>
      </div>
    </div>
  )
}

export default Footer
