"use client";

import React, { useState } from 'react';
import Logo from '../atoms/Logo';
import Container from '../atoms/Container';
import Link from 'next/link';
import "../../app/globals.css";

function Header() {
  const [isDropdownOpen, setIsDropdownOpen] = useState(false);
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleDropdown = () => {
    setIsDropdownOpen(!isDropdownOpen);
  };

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <Container>
      <div className='flex justify-between items-center h-[90px] top-0 left-0 w-full z-10'>
        <Logo src='/assits/images/logo.png' />
        <nav className='hidden md:block'>
          <ul className="flex gap-8 list-none">
            <li><Link href="/">Home</Link></li>
            <li><Link href="/accommodation">Find Your Accommodation</Link></li>
            <li className="relative" onMouseEnter={toggleDropdown} onMouseLeave={toggleDropdown}>
              <Link href="/addmission">Admissions / Placements</Link>
              {isDropdownOpen && (
                <ul className="absolute border rounded shadow-lg w-36 bg-white z-999">
                  <Link href="/addmission/#1"><li className='my-1 py-1 pl-2 mx-2 rounded hover:bg-[#00918E] hover:text-white hover:cursor-pointer'>UK</li></Link>
                  <Link href="/addmission/#2"><li className='my-1 py-1 pl-2 mx-2 rounded hover:bg-[#00918E] hover:text-white hover:cursor-pointer'>Australia</li></Link>
                  <Link href="/addmission/#3"><li className='my-1 py-1 pl-2 mx-2 rounded hover:bg-[#00918E] hover:text-white hover:cursor-pointer'>USA</li></Link>
                  <Link href="/addmission/#4"><li className='my-1 py-1 pl-2 mx-2 rounded hover:bg-[#00918E] hover:text-white hover:cursor-pointer'>Canada</li></Link>
                  <Link href="/addmission/#5"><li className='my-1 py-1 pl-2 mx-2 rounded hover:bg-[#00918E] hover:text-white hover:cursor-pointer'>Germany</li></Link>
                  <Link href="/addmission/#6"><li className='my-1 py-1 pl-2 mx-2 rounded hover:bg-[#00918E] hover:text-white hover:cursor-pointer'>Malaysia</li></Link>
                  <Link href="/addmission/#7"><li className='my-1 py-1 pl-2 mx-2 rounded hover:bg-[#00918E] hover:text-white hover:cursor-pointer'>Dubai</li></Link>
                </ul>
              )}
            </li>
            <li><Link href="/blog">Blog</Link></li>
            <li><Link href="/about">About Us</Link></li>
            <li><Link href="/contact">Contact</Link></li>
          </ul>
        </nav>
        <button onClick={toggleMenu} className='md:hidden'>
          {isMenuOpen ? (
            <svg className='w-6 h-6' fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M6 18L18 6M6 6l12 12" />
            </svg>
          ) : (
            <svg className='w-6 h-6' fill="none" stroke="currentColor" viewBox="0 0 24 24" xmlns="http://www.w3.org/2000/svg">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M4 6h16M4 12h16M4 18h16" />
            </svg>
          )}
        </button>
        <Link
          href='/apply'
          className='bg-[#00918E] py-3 px-5 text-white rounded-[100px] tracking-[1px] text-[12px] font-bold uppercase hidden md:block'>
          Apply Now
        </Link>
      </div>
      <div className={`md:hidden ${isMenuOpen ? 'block' : 'hidden'}`}>
        <ul className="flex flex-col gap-4 p-4 bg-white">
          <li><Link href="/">Home</Link></li>
          <li><Link href="/accommodation">Find Your Accommodation</Link></li>
          <li className="relative">
            <Link href="addmission" onClick={toggleDropdown}>Admissions / Placements</Link>
            {isDropdownOpen && (
              <ul className="pl-4">
                <Link href="/addmission/#1"><li className='py-2 pl-2 mx-2 rounded hover:bg-[#00918E] hover:text-white hover:cursor-pointer'>UK</li></Link>
                <Link href="/addmission/#2"><li className='py-2 pl-2 mx-2 rounded hover:bg-[#00918E] hover:text-white hover:cursor-pointer'>Australia</li></Link>
                <Link href="/addmission/#3"><li className='py-2 pl-2 mx-2 rounded hover:bg-[#00918E] hover:text-white hover:cursor-pointer'>USA</li></Link>
                <Link href="/addmission/#4"><li className='py-2 pl-2 mx-2 rounded hover:bg-[#00918E] hover:text-white hover:cursor-pointer'>Canada</li></Link>
                <Link href="/addmission/#5"><li className='py-2 pl-2 mx-2 rounded hover:bg-[#00918E] hover:text-white hover:cursor-pointer'>Germany</li></Link>
                <Link href="/addmission/#6"><li className='py-2 pl-2 mx-2 rounded hover:bg-[#00918E] hover:text-white hover:cursor-pointer'>Malaysia</li></Link>
                <Link href="/addmission/#7"><li className='py-2 pl-2 mx-2 rounded hover:bg-[#00918E] hover:text-white hover:cursor-pointer'>Dubai</li></Link>
              </ul>
            )}
          </li>
          <li><Link href="/blog">Blog</Link></li>
          <li><Link href="/about">About Us</Link></li>
          <li><Link href="/contact">Contact</Link></li>
          <Link href='/apply' className='bg-[#00918E] py-3 px-5 text-white rounded-[100px] tracking-[1px] text-[12px] font-bold uppercase text-center '>
            Apply Now
          </Link>
        </ul>
      </div>
    </Container>
  );
}

export default Header;
