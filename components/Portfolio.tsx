'use client'

import React from 'react'
import Image from 'next/image'
import ProjectCard from "./ProjectCard"
import temp from "../assets/temp.png"
import koligo from "../assets/koligo.png"
import closeread from "../assets/closeread.png"
import hinty from "../assets/hinty.png"
import wanas from "../assets/wanas.png"
import candlestick from "../assets/candlestick.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const projects = [
  {image: closeread, name: "CloseRead", description: "One fine filler line", backgroundClass: "bg-[#fbf1e8]" },
  {image: wanas, name: "Wanas", description: "One fine filler line", backgroundClass: "bg-[#eaf4f2]" },
  {image: hinty, name: "Hinty", description: "One fine filler line", backgroundClass: "bg-[#f1effb]" },
  {image: koligo, name: "Koligo", description: "One fine filler line", backgroundClass: "bg-[#EBF8FF]" },
  {image: candlestick, name: "Candlestick AI", description: "One fine filler line", backgroundClass: "bg-[#fbffe8]" },
];

const Portfolio = () => {
  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: 3,
    slidesToScroll: 3
  };
  return (
    <div className='mt-20 w-full px-[12%] py-10 scroll-mt-20'>
        <h4 className='text-center mb-2 text-lg font-ovo'>My portfolio</h4>
        <h2 className='text-center text-5xl font-ovo'>My latest work</h2>
        <p className='text-center max-w-2xl mx-auto mt-5 mb-12 font-ovo'>Welcome to my portfolio! Explore a collection of projects showcasing my expertise.</p>
        <Slider {...settings}>
            {projects.map((project) => (
              <div key={project.backgroundClass} className='px-2'>
                <ProjectCard {...project} />
              </div>
            ))}
        </Slider>
    </div>
  )
}

export default Portfolio