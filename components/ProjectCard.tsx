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
    <article className="flex h-full flex-col overflow-hidden rounded-2xl border border-gray-200">
      <div className={`${backgroundClass} flex h-[30vh] items-end justify-center`}>
        <Image src={image} alt="" className="w-40" />
      </div>

      <div className="flex flex-1 flex-col gap-2 p-4">
        <h2 className="text-3xl font-ovo">{name}</h2>
        <p className="min-h-18 text-lg font-ovo">{description}</p>
        <div className="mt-auto flex flex-wrap items-center gap-2">
          <button className="btn"><Image src={applelogo} alt="" className="w-4" /><h3 className="font-medium">App store</h3></button>
          <button className="btn"><Image src={playlogo} alt="" className="w-4" /><h3 className="font-medium">Play store</h3></button>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard