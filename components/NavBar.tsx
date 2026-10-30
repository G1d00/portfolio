'use client'

import React, { useEffect, useRef, useState } from 'react'
import Image from 'next/image'
import { MoveUpRight, Moon, Menu, Sun, X } from 'lucide-react';
import headerBg from "../assets/header-bg-color.png";

const NavBar = () => {

  const [isMenuOpen, setIsMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  const scrollToSection = (event: any) => {
    event.preventDefault();

    const target = document.getElementById(
        event.currentTarget.hash.slice(1)
    );

    if (!target) {
        console.error(`Section not found: ${event.currentTarget.hash}`);
        return;
    }

    const start = window.scrollY;
    const destination = target.getBoundingClientRect().top + start - 80;
    const duration = 1000; // milliseconds
    let startTime;

    const animate = (time: any) => {
        startTime ??= time;
        const progress = Math.min((time - startTime) / duration, 1);
        const eased = 1 - (1 - progress) ** 3;

        window.scrollTo(0, start + (destination - start) * eased);

        if (progress < 1) window.requestAnimationFrame(animate);
    };

    window.requestAnimationFrame(animate);
    };

  useEffect(() => {
    const handleScroll= () => setIsScrolled(window.scrollY > 0)
    
    window.addEventListener('scroll', handleScroll, {passive: true})

    return () => window.removeEventListener('scroll', handleScroll)
  }, []) 

  return (
    <>
        <div className='fixed top-0 right-0 w-11/12 -z-10 translate-y-[-80%]'>
            <Image src={headerBg} alt="" width={500} height={500} className='w-full h-auto' loading="eager"/>
        </div>
        <nav className={`flex items-center justify-between px-5 lg:px-8 xl:px-[8%] py-4 fixed w-full z-50 transition-all duration-300 ${isScrolled ? 'bg-white/50 backdrop-blur-lg shadow-sm' : ""}`}>
            <div/>
            <ul className={`hidden md:flex items-center gap-6 lg:gap-8 px-12 py-3 font-ovo ${isScrolled ? "" : "rounded-full shadow-sm bg-white/50"}`}>
                <li><a onClick={scrollToSection} href='#home'>Home</a></li>
                <li><a onClick={scrollToSection} href='#about'>About me</a></li>
                <li><a onClick={scrollToSection} href='#work'>My Work</a></li>
                <li><a onClick={scrollToSection} href='#contact'>Contact Me</a></li>
            </ul>
            <div className='flex items-center gap-4'>
                {/* <button className='cursor-pointer'>
                    <Moon className=''/>
                    <Sun className='dark:hidden'/>
                </button> */}
                <a onProgress={scrollToSection} className='hidden lg:flex items-center gap-3 px-6 py-2.5 border border-gray-300 rounded-full hover:bg-slate-100/70 ml-4 font-ovo' href='#contact'>
                    Contact <MoveUpRight className='w-5'/>
                </a>
                <button onClick={() => {setIsMenuOpen(true)}} className='flex md:hidden cursor-pointer'>
                    <Menu />
                </button>
            </div>

            {isMenuOpen && (
                <button
                    type="button"
                    aria-label="Close navigation menu"
                    onClick={() => setIsMenuOpen(false)}
                    className="fixed inset-0 z-40 bg-black/20 md:hidden"
                />
            )}
            <ul className={`fixed top-0 right-0 z-50 h-screen w-64 bg-rose-50 px-10 py-20 flex md:hidden flex-col gap-4 font-ovo transition-transform duration-500 ${isMenuOpen ? "translate-x-0" : "translate-x-full"}`}>
                <button onClick={() => {setIsMenuOpen(false)}} className='cursor-pointer'>
                    <X />
                </button>
                <li><a onClick={scrollToSection} href='#home'>Home</a></li>
                <li><a onClick={scrollToSection} href='#about'>About me</a></li>
                <li><a onClick={scrollToSection} href='#work'>My Work</a></li>
                <li><a onClick={scrollToSection} href='#contact'>Contact Me</a></li>
            </ul>
        </nav>
    </>
  )
}

export default NavBar
