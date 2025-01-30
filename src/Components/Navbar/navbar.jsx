import React, { useEffect, useState } from "react";
import bandLogo from "../../assets/brand-2.svg";
import { Link } from "react-router-dom";
import { RxHamburgerMenu } from "react-icons/rx";
import { RxCross2 } from "react-icons/rx";


const Navbar = () => {
    
  const [rightPos,setRightPos]=useState(-8000);

  window.addEventListener("scroll",()=>{
    setRightPos(-8000);
  })
  
  function handleToggleNavClick(){
    setRightPos(0);
  }

  function handleToggleNavCloseClick(){
    setRightPos(-8000);
  }

  return (
    <div className="navbar-home w-screen flex justify-around lg:fixed top-0 left-0 right-0  py-3 bg-[rgba(0,0,0,0.8)] z-999 relative">
      <div className="logo-div flex items-center gap-x-2 py-2">
        <img src={bandLogo} alt="loading" className="w-10" />
        <p className="text-white">
          <span className="text-xl font-semibold text-amber-600">Van Lang</span>{" "}
          Tour
        </p>
      </div>

      <div className="nav-ends  flex lg:gap-x-20 gap-x-5 items-center">
        <div className="hidden lg:block">
          <ul className="flex gap-x-20 items-center">
            <li className="text-gray-400 hover:text-white cursor-pointer">
              <Link to="/home">Home</Link>
            </li>
            <li className="text-gray-400 hover:text-white cursor-pointer">
              <Link to="/about">About us</Link>
            </li>
            <li className="text-gray-400 hover:text-white cursor-pointer">
              <Link to="/booking">Booking</Link>
            </li>
            <li className="text-gray-400 hover:text-white cursor-pointer ">
              <Link to="/login">Login</Link>
            </li>
          </ul>
        </div>
        <button className="py-2 px-3 rounded cursor-pointer bg-yellow-600 text-white">
          <Link to="/signup">Sign up</Link>
        </button>
        <RxHamburgerMenu className="text-white text-2xl cursor-pointer block  lg:hidden" onClick={handleToggleNavClick} />
      </div>


      <ul className="transition-all duration-500 ease-in-out flex flex-col gap-y-5 items-start p-20 absolute h-screen w-[100%] top-0 bg-black" style={{right:`${rightPos}px`}}>
        
      <div className="logo-div flex items-center gap-x-2 py-2">
        <img src={bandLogo} alt="loading" className="w-10" />
        <p className="text-white">
          <span className="text-xl font-semibold text-amber-600">Van Lang</span>{" "}
          Tour
        </p>
      </div>
        <li className="text-gray-400 hover:text-white cursor-pointer">
          <Link to="/home">Home</Link>
        </li>
        <li className="text-gray-400 hover:text-white cursor-pointer">
          <Link to="/about">About us</Link>
        </li>
        <li className="text-gray-400 hover:text-white cursor-pointer">
          <Link to="/booking">Booking</Link>
        </li>
        <li className="text-gray-400 hover:text-white cursor-pointer ">
          <Link to="/login">Login</Link>
        </li>
        
        <button className="py-2 px-3 rounded cursor-pointer bg-yellow-600 text-white">
          <Link to="">Logout</Link>
        </button>
        <RxCross2 className="absolute right-10 top-5 text-white text-2xl cursor-pointer block  lg:hidden" onClick={handleToggleNavCloseClick} />

      </ul>
    </div>
  );
};

export default Navbar;
