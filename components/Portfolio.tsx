import React from 'react'
import Image from 'next/image'
import ProjectCard from "./ProjectCard"
import temp from "../assets/temp.png"
import koligo from "../assets/koligo.png"
import closeread from "../assets/closeread.png"
import hinty from "../assets/hinty.png"
import wanas from "../assets/wanas.png"

const projects = [
  {image: closeread, name: "CloseRead", description: "One fine filler line", backgroundClass: "bg-[#f1effb]" },
  {image: wanas, name: "Wanas", description: "One fine filler line", backgroundClass: "bg-[#eaf4f2]" },
  {image: hinty, name: "App Name", description: "One fine filler line", backgroundClass: "bg-[#fbf1e8]" },
];

const Portfolio = () => {
  return (
    <div className='mt-20 w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg font-ovo'>My portfolio</h4>
        <h2 className='text-center text-5xl font-ovo'>My latest work</h2>
        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>Welcome to my portfolio! Explore a collection of projects showcasing my expertise.</p>
        <div className="grid grid-cols-1 lg:grid-cols-3 my-10 gap-10">
            {projects.map((project) => (
                <ProjectCard key={project.backgroundClass} {...project} />
            ))}
        </div>
    </div>
  )
}

export default Portfolio