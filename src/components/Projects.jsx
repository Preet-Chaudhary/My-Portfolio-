import React from 'react'
import {PROJECTS} from "../constants/index"

const Projects = () => {
  return (
            <div className='flex flex-col items-center '>
    <div className=''>
            <h1 className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>Projects</h1>
        </div>
        <div className='flex flex-col lg:flex-row gap-4 p-4 m-4'>
         {PROJECTS.map((Projects,index)=>(
          <div key={index} className='flex flex-col items-center border-4 rounded-2xl w-80 h-110 p-4
           border-gradient-to-r from-pink-300 via-slate-500 to-purple-500'>
            <img src={Projects.image} className ="h-60 w-60 m-1 rounded-2xl"alt="" />
            <h3 className='text-white font-bold text-xl'>{Projects.title}</h3>
            <p className='text-white items-center text-justify justify-items-center px-auto' >{Projects.description}</p>
            <ul className='flex gap-2 flex-row'>
              {Projects.technologies.map((tech,idx)=>(<li className='text-white' key={idx}>
                {tech}
              </li>))}
            </ul>
          </div>
         )

         )}
        </div>
        </div>
  )
}

export default Projects