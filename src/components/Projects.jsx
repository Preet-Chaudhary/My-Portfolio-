//import React from 'react'

import { Icons } from "../constants/icons";
import { PROJECTS } from "../constants/index";

const Projects = () => {
  return (
    <div className="flex flex-col items-center ">
      <div className="">
        <h1 className="bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent">
          Projects
        </h1>
      </div>
      <div className="flex flex-col lg:flex-row flex-wrap gap-4 p-4 m-4 justify-center">
        {PROJECTS.map((project, index) => (
          <a
            key={index}
            href={project.link}
            target="_blank"
            rel="noopener noreferrer"
            className="hover:scale-105 transition-transform duration-300 individual"
          >
            <div className="flex flex-col justify-between items-center border-4 rounded-2xl w-80 h-full p-4 border-gradient-to-r from-pink-300 via-slate-500 to-purple-500">
              <div className="flex-1 flex flex-col items-center">
                <img
                  src={project.image}
                  className="m-auto h-60 w-60 rounded-2xl"
                  alt=""
                />
                <h3 className="text-white font-bold text-center text-xl mt-2">
                  {project.title}
                </h3>
                <p className="text-white text-justify mt-2">
                  {project.description}
                </p>
              </div>
              <ul className="flex gap-2 flex-row pt-4">
                {project.technologies.map((tech, idx) => {
                  const Temp = Icons[tech];
                  return (
                    <li className="text-white text-2xl" key={idx} title={tech}>
                      {Temp ? <Temp /> : tech}
                    </li>
                  );
                })}
              </ul>
            </div>
          </a>
        ))}
      </div>
    </div>
  );
};

export default Projects;
