import React from 'react'
import { HERO_CONTENT } from '../constants'
import heropic from '../assets/projects/hero-pic.png'
import {motion} from 'framer-motion'
const  Hero = () => {
  return (
    <div className='border-b border-neutral-900 pb-4 lg: mb-35'> 
    <div className='flex flex-wrap'>
      <div className='w-full lg:w-1/2'>
        <div className="flex flex-col p-9 items-center lg:items-start">
            <motion.h1 animate={{x:8}}  className='pb-16 text-6xl text-cyan-100 font-thin tracking-tight lg: mt-16 lg:text-8xl'>
                Preet Chaudhary
            </motion.h1>
                <span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'> Full Stack Developer</span>
                <p className='my-2 max-w-xl font-display text-xl text-white py-6 tracking-tighter'>{HERO_CONTENT}</p>
        </div>
      </div>
      <div className='w-full lg:w-1/2 lg:p-8 '>
        <div className='flex h-full justify-center items-center'>
        <img className='mt-10 w-88 h-100 rounded-2xl' src={heropic} alt="helpoilo" />
        </div>
      </div>
     
        </div>
        </div>
  )
}

export default Hero