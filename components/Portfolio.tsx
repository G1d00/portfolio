'use client'

import { useEffect, useState } from 'react'
import ProjectCard from "./ProjectCard"
import koligo from "../assets/koligo.png"
import closeread from "../assets/closeread.png"
import hinty from "../assets/hinty.png"
import wanas from "../assets/wanas.png"
import candlestick from "../assets/candlestick.png"
import "slick-carousel/slick/slick.css";
import "slick-carousel/slick/slick-theme.css";
import Slider from "react-slick";

const projects = [
  {image: closeread, name: "CloseRead", description: "Chat Analyser · Lifestyle", backgroundClass: "bg-[#fbf1e8]" },
  {image: wanas, name: "Wanas", description: "Dinner with strangers · Social Networking", backgroundClass: "bg-[#eaf4f2]" },
  {image: hinty, name: "Hinty", description: "AI guide and helper for video games · Entertainment", backgroundClass: "bg-[#f1effb]" },
  {image: koligo, name: "Koligo", description: "Personal CRM and social network manager · Productivity", backgroundClass: "bg-[#EBF8FF]" },
  {image: candlestick, name: "Candlestick AI", description: "AI trading chart scanner · Finance", backgroundClass: "bg-[#fbffe8]" },
];

const Portfolio = () => {
  const [isMobile, setIsMobile] = useState(false);

  useEffect(() => {
    const mediaQuery = window.matchMedia("(max-width: 1024px)");
    const updateIsMobile = () => setIsMobile(mediaQuery.matches);

    updateIsMobile();
    mediaQuery.addEventListener("change", updateIsMobile);

    return () => mediaQuery.removeEventListener("change", updateIsMobile);
  }, []);

  const settings = {
    dots: true,
    infinite: true,
    speed: 500,
    slidesToShow: isMobile ? 1 : 3,
    slidesToScroll: isMobile ? 1 : 3,
  };
  return (
    <div className='mt-20 w-full px-[12%] py-10 scroll-mt-20' id='work'>
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