'use client'

import { Mail } from 'lucide-react';
import React, { useEffect, useState } from 'react'

const Footer = () => {
    const [year, setYear] = useState<number | null>(null);
    
    useEffect(()=> {
        setYear(new Date().getFullYear())
    }, [])
  return (
    <div className='mt-0'>
        <div className='flex flex-row gap-1 justify-center items-center mb-10'>
            <Mail className=''/>
            <a href="mailto:mohamedgaber9822@gmail.com" className='font-ovo underline cursor-pointer'>mohamedgaber9822@gmail.com</a>
        </div>
        <div className='text-center border-t border-gray-400 mx-[10%] py-3 sm:flex items-center justify-center'>
            <p>© {year} Mohamed Gaber</p>
            <ul>
                <li></li>
            </ul>
        </div>
    </div>
  )
}

export default Footer