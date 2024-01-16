import React from 'react';
import ProjectCard from './ProjectCard';
import E_commerce from '../assets/E_commerce.jpg';

const Projects = () => {
  return (
    <div className="w-full bg-gradient-to-b from-black to-gray-800 text-white">
      <div
        name="projects"
        className="max-w-screen-lg mx-auto flex flex-col items-center justify-center px-4"
      >
        <div className="text-white flex flex-col justify-center">
          <div className="flex justify-center items-center text-center mt-20">
            <div className="flex flex-col gap-2 font-titleFont mb-5">
              <h1 className="text-4xl md:text-5xl text-gray-300 font-bold capitalize">
                My Projects
              </h1>
            </div>
          </div>
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 xl:grid-cols-3 gap-3 xl:gap-5 justify-center items-center mb-8">
            <ProjectCard
              src={E_commerce}
              title="SOCIAL MEDIA CLONE"
              des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
              githubLink="https://github.com/CodingComrades20/CEM-System"
            />
            <ProjectCard
              title="E-commerce Website"
              des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
            />
            <ProjectCard
              title="Chatting App"
              des="Lorem, ipsum dolor sit amet consectetur adipisicing elit. Explicabo quibusdam voluptate sapiente voluptatibus harum quidem!"
            />
          </div>
        </div>
      </div>
    </div>
  );
};

export default Projects;
