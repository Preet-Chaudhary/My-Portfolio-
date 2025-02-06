import React from 'react'
import { ABOUT_TEXT } from '../constants'
import aboutme from "../assets/projects/aboutme.png"

const About = () => {
  return (
    <>
<div className='flex flex-col items-center justify-center '>
    <div className='mb-5'>

   <h1 className='text-2xl text-white '>About <span className='text-2xl text-slate-400'>ME</span></h1>

    </div>
    <div className='flex flex-col justify-center lg:flex-row justify-center gap-10 mx-10'>  
        <div className='mx-auto'>
            <img className="h-82 w-75 rounded-full"src={aboutme} alt="" />
        </div>
        <div className='lg:w-1/2 mx-auto'>

        <p className='text-lg w-0.7 p-t-6 text-white '>{ABOUT_TEXT}</p>
        </div>
    </div>
</div>
    </>
  )
}

export default About