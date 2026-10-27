import React from 'react'
import Image, { StaticImageData } from 'next/image'
import applelogo from "../assets/apple-logo.png"
import playlogo from "../assets/play-store.png"


type ProjectCardProps = {
  image: StaticImageData;
  name: string;
  description: string;
  backgroundClass: string;
};


const ProjectCard = ({ image, name, description, backgroundClass }: ProjectCardProps) => {
    return (
    <article className="border border-gray-200 rounded-2xl">
      <div className={`${backgroundClass} flex items-end justify-center h-[30vh] rounded-t-2xl`}>
        <Image src={image} alt=""  className='w-40' />
      </div>

      <div className="px-4 py-2 flex flex-col gap-2">
        <h2 className="text-3xl font-ovo">{name}</h2>
        <p className="text-lg font-ovo">{description}</p>
        <div className="flex gap-2 items-center">
          <button className="btn"><Image src={applelogo} alt='' className='w-4'/><h3 className='font-medium'>App store</h3></button>
          <button className="btn"><Image src={playlogo} alt='' className='w-4'/><h3 className='font-medium'>Play store</h3></button>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard