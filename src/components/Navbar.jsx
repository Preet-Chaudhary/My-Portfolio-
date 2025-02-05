// import React from 'react'
import logo from "./../assets/projects/logo.jpg"
  import {FaInstagram } from "react-icons/fa6";
  import {FaLinkedin } from "react-icons/fa6";
  import {FaGithub } from "react-icons/fa6";
 import {FaSquareXTwitter } from "react-icons/fa6";
const Navbar = () => {
  return (
    <nav className='mb-20 flex items-center justify-between py-3'>
      <div className="flex flex-shrink-0 items-center w-full justify-between">
        <img className="w-20 h-20 m-4 border-2 rounded-full" src={logo} alt="logo" />
        <div className="m-8 flex items-center gap-4 text-2xl">
          <FaGithub />
          <FaInstagram />
          <FaLinkedin />
          <FaSquareXTwitter />
          
        </div>
      </div>
    </nav>
  )
}

export default Navbar