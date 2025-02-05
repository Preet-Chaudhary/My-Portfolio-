import React from 'react'
import { ABOUT_TEXT } from '../constants'
import aboutmg from "../assets/projects/aboutmg.jpeg"

const About = () => {
  return (
    <>
<div className='flex flex-col items-center justify-center '>
    <div className='mb-5'>

   <h1 className='text-2xl text-white '>About <span className='text-2xl text-slate-400'>ME</span></h1>

    </div>
    <div className='flex justify-center gap-10 mx-10'>  
        <div>
            <img className="h-82 w-70 rounded-full"src={aboutmg} alt="" />
        </div>
        <div className='w-1/2'>

        <p className='text-lg w-0.7 text-white '>{ABOUT_TEXT}</p>
        </div>
    </div>
</div>
    </>
  )
}

export default About