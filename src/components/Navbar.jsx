
"use client"
import React from 'react';
import Link from 'next/link';
import { usePathname } from 'next/navigation'; // For active state

function Navbar() {
  const pathname = usePathname(); // Get the current path

  // Function to check if a link is active
  const isActive = (path) => {
    return pathname === path;
  };

  return (
    <div className='navbar backdrop-blur-md justify-around h-[75px] px-3 md:px-5 lg:px-28 fixed z-40 '>
      <div className="navbar-start">
        <a className="h-8 w-8 lg:h-[74px] lg:w-[74px] text-white">
          <img src="../Images/logo.png" alt="" />
        </a>
      </div>
      <div className='navbar-center'>
        <ul className='flex gap-4 lg:gap-12'>
          <li className={`text-[10px] lg:text-lg text-white ${isActive('/') ? 'font-bold ' : ''}`}>
            <Link href="#hero">Home</Link>
          </li>
          <li className={`text-[10px] lg:text-lg text-white ${isActive('/#work') ? 'font-bold ' : ''}`}>
            <Link href="#work">How We Work</Link>
          </li>
          <li className={`text-[10px] lg:text-lg text-white lg:hidden ${isActive('/#collection') ? 'font-bold ' : ''}`}>
            <Link href='#collection'>Collection</Link>
          </li>
          <li className={`text-[10px] lg:text-lg text-white hidden lg:block ${isActive('/#shop') ? 'font-bold ' : ''}`}>
            <Link href='#shop'>Shop</Link>
          </li>
          <li key="Services" className={`text-[10px] lg:text-lg text-white hidden lg:block ${isActive('#services') ? 'font-bold ' : ''}`}>
            <Link href='#services'>Services</Link>
          </li>
          <li className={`text-[10px] lg:text-lg text-white hidden md:block ${isActive('/#contact') ? 'font-bold ' : ''}`}>
            <Link href='#contact'>Contact</Link>
          </li>
        </ul>
      </div>
      <div className='navbar-end'>
        <div>
          <button className='hidden md:block btn text-[22px] h-12 w-44 rounded-none bg-[#351A88] text-white border-none shadow-2xs'>Explore Now</button>
        </div>
        <div className="dropdown md:hidden">
          <div tabIndex={0} role="button" className="text-white md:hidden">
            <svg xmlns="http://www.w3.org/2000/svg" className="h-5 w-5 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h8m-8 6h16" />
            </svg>
          </div>
          
        </div>
      </div>
    </div>
  );
}

export default Navbar;