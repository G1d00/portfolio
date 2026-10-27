import React from 'react'
import Image, { StaticImageData } from 'next/image'


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
          <button className="px-4 py-2 border border-gray-200 rounded-2xl">
            App store
          </button>
          <button className="px-4 py-2 border border-gray-200 rounded-2xl">
            Play store
          </button>
        </div>
      </div>
    </article>
  );
}

export default ProjectCard