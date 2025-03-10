// import React from 'react'
import logo from "./../assets/projects/logo.jpg";
import { FaInstagram } from "react-icons/fa6";
import { FaLinkedin } from "react-icons/fa6";
import { FaGithub } from "react-icons/fa6";
import { FaSquareXTwitter } from "react-icons/fa6";
const Navbar = () => {
  return (
    <nav className="mb-20 flex items-center justify-between py-3">
      <div className="flex flex-shrink-0 items-center w-full justify-between">
        <img
          className="w-20 h-20 m-4 border-2 rounded-full baller"
          src={logo}
          alt="logo"
        />
        <div className="m-8 flex items-center gap-4 text-2xl">
          <a className="icons"  href="https://github.com/Preet-Chaudhary">  <FaGithub /></a>
          <a className="icons"  href="https://www.instagram.com/preetchaudhary110/">
          <FaInstagram /></a>
          <a className="icons"  href="https://www.linkedin.com/in/preet-chaudhary/"><FaLinkedin /></a>
          <a  className="icons" href="">     <FaSquareXTwitter /></a>
        

          
     
        </div>
      </div>
    </nav>
  );
};






export default Navbar;
