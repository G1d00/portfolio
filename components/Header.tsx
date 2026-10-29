'use client'

import React from 'react'
import Image from 'next/image'
import wave from "../assets/wave.png"
import { MoveRight, Download } from 'lucide-react';

const Header = () => {

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

  return (
    <div className='w-11/12 max-w-3xl text-center flex flex-col items-center justify-center gap-4 mx-auto h-screen' id='home'>
      {/* <Image src={temp} alt='' className='w-30 h-auto rounded-full'/> */}
      <h3 className='flex items-center justify-center gap-2 text-xl md:text-2xl mb-5 font-ovo'>Hi I'm Mohamed Gaber<Image src={wave} alt='' className='w-7'/></h3>
      <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-ovo'>React/React native full stack developer.</h1>
      <p>I am a full stack React developer based in Cairo with 2 years of experience.</p>
      <div className='flex gap-4 mt-5'>
        <a
          href="#contact"
          onClick={scrollToSection}
          className="btn btn-active btn-primary rounded-4xl px-10 py-6 flex items-center justify-center gap-2"
        >
          Contact me <MoveRight />
        </a>
        <a
          href="/MohamedGaber.pdf"
          download="Mohamed-Gaber-Resume.pdf"
          className="btn btn-neutral btn-outline rounded-4xl px-10 py-6 flex items-center justify-center gap-2"
        >
          My resume <Download />
        </a>
      </div>
    </div>
  )
}

export default Header