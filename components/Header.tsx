import React from 'react'
import Image from 'next/image'
import temp from "../assets/temp.png"
import wave from "../assets/wave.png"
import { Hand, MoveRight, Download } from 'lucide-react';

const Header = () => {
  return (
    <div className='w-11/12 max-w-3xl text-center flex flex-col items-center justify-center gap-4 mx-auto h-screen'>
      {/* <Image src={temp} alt='' className='w-30 h-auto rounded-full'/> */}
      <h3 className='flex items-center justify-center gap-2 text-xl md:text-2xl mb-5 font-ovo'>Hi I'm Mohamed Gaber<Image src={wave} alt='' className='w-7'/></h3>
      <h1 className='text-3xl sm:text-6xl lg:text-[66px] font-ovo'>React/React native full stack developer.</h1>
      <p>I am a full stack React developer based in Cairo with 2 years of experience.</p>
      <div className='flex gap-4 mt-5'>
        <button className="btn btn-active btn-primary rounded-4xl px-10 py-6">
          <a className='flex flex-row items-center justify-center gap-2'>Contact me <MoveRight/></a>
        </button>
        <button className="btn btn-neutral btn-outline rounded-4xl px-10 py-6">
          <a className='flex flex-row items-center justify-center gap-2'>My resume <Download/></a>
        </button>
      </div>
    </div>
  )
}

export default Header