import React from 'react'
import Image from 'next/image'
import temp from "../assets/temp.png"
import { ChevronsLeftRight, FolderClosed, GraduationCap } from 'lucide-react'

const Introduction = () => {
  return (
    <div className='w-full scroll-mt-20 py-10 px-[12%]' id="about">
        <h4 className='text-xl text-center'>Introduction</h4>
        <h2 className='text-5xl font-ovo text-center'>About me</h2>
        <div className='flex flex-col items-center my-20'>
            {/* <div className='mx-auto max-w-max relative'>
                <Image src={temp} alt='' className='w-64 sm:w-80 rounded-3xl max-w-none'/>
                <div className='bg-white w-1/2 aspect-square absolute right-0 bottom-0 rounded-full translate-x-1/4 translate-y-1/3 shadow-[0_4px_55px_rgba(149,0,162,0.15)] flex items-center justify-center'>
                    <Image src={temp} alt='' className='animate-spin_slow'/>
                    <Image src={temp} alt='' className='w-1/4 absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2'/>
                </div>
            </div> */}
            <p className='mb-10 max-w-2xl font-ovo'>Mobile App Developer building cross-platform iOS and Android apps with React Native, Expo, and TypeScript. I ship production apps end-to-end: clean native UI and satisfying UX, Supabase/Postgres backends, Clerk auth, and RevenueCat monetization, with a focus on performance and reliability.</p>
            <ul className='grid grid-cols-1 sm:grid-cols-3 gap-6 max-w-2xl'>
                <li className='border border-gray-300 rounded-xl p-6 cursor-pointer hover:bg-[#FCF4FF] hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]'>
                    <ChevronsLeftRight className='mt-3'/>
                    <h3 className='font-semibold text-gray-600 my-4'>Languages</h3>
                    <p className='text-gray-600 text-sm'>React, React Native, JavaScript/TypeScript, Next Js</p>
                </li>
                <li className='border border-gray-300 rounded-xl p-6 cursor-pointer hover:bg-[#FCF4FF] hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]'>
                    <GraduationCap className='mt-3'/>
                    <h3 className='font-semibold text-gray-600 my-4'>Education</h3>
                    <p className='text-gray-600 text-sm'>Bachelor's in Computer science</p>
                </li>
                <li className='border border-gray-300 rounded-xl p-6 cursor-pointer hover:bg-[#FCF4FF] hover:-translate-y-1 duration-500 hover:shadow-[4px_4px_0_#000]'>
                    <FolderClosed className='mt-3'/>
                    <h3 className='font-semibold text-gray-600 my-4'>Projects</h3>
                    <p className='text-gray-600 text-sm'>Build more than 5 projects</p>
                </li>
                </ul>
        </div>
    </div>
  )
}

export default Introduction