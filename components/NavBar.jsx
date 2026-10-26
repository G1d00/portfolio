'use client'

import React, { useRef, useState } from 'react'
import Image from 'next/image'
import { MoveUpRight, Moon, Menu, Sun, X } from 'lucide-react';
import headerBg from "../assets/header-bg-color.png";

const NavBar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);

  return (
    <>
        <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
            <Image src={headerBg} alt="" width={500} height={500} className='w-full h-auto'/>
        </div>
        <nav className='flex items-center justify-between px-5 lg:px-8 xl:px-[8%] py-4 fixed w-full z-50'>
            <div/>
            <ul className='hidden md:flex items-center gap-6 lg:gap-8 rounded-full shadow-sm bg-opacity-50 px-12 py-3 font-ovo'>
                <li><a href=''>Home</a></li>
                <li><a href=''>About me</a></li>
                <li><a href=''>Services</a></li>
                <li><a href=''>My Work</a></li>
                <li><a href=''>Contact Me</a></li>
            </ul>
            <div className='flex items-center gap-4'>
                <button className='cursor-pointer'>
                    <Moon className=''/>
                    <Sun className='dark:hidden'/>
                </button>
                <a className='hidden lg:flex items-center gap-3 px-8 py-2.5 border border-gray-300 rounded-full hover:bg-slate-100/70 ml-4 font-ovo' href=''>
                    Contact <MoveUpRight className=''/>
                </a>
                <button onClick={() => {setIsMenuOpen(true)}} className='flex md:hidden cursor-pointer'>
                    <Menu />
                </button>
            </div>

            <ul className={`fixed top-0 right-0 z-50 h-screen w-64 bg-rose-50 px-10 py-20 flex md:hidden flex-col gap-4 font-ovo transition-transform duration-500 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
                <button onClick={() => {setIsMenuOpen(false)}} className='cursor-pointer'>
                    <X />
                </button>
                <li><a href=''>Home</a></li>
                <li><a href=''>About me</a></li>
                <li><a href=''>Services</a></li>
                <li><a href=''>My Work</a></li>
                <li><a href=''>Contact Me</a></li>
            </ul>
        </nav>
    </>
  )
}

export default NavBar

