import React from 'react'
import { FaNodeJs } from "react-icons/fa";
import { SiMongodb, SiMysql, SiExpress, SiReact, SiTailwindcss } from "react-icons/si";


const Technologies = () => {
  
  return (
    <div className='flex flex-col gap-8 mt-12 items-center justify-center border-t-4 p-5'>
        <div className=''>
            <h1 className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>Technologies</h1>
        </div>
        <div className='flex flex-col  lg:flex-row gap-8'>
            <div className="rounded-xl border-4 border-neutral-800 hover:scale-115 duration-100  p-4"><FaNodeJs size={50} color="green" /></div>
            <div className="rounded-xl border-4 border-neutral-800 hover:scale-115 duration-100  p-4"><SiExpress size={50} color="red" /></div>
            <div className="rounded-xl border-4 border-neutral-800 hover:scale-115 duration-100  p-4"><SiMongodb size={50} color="green" /></div>
            <div className="rounded-xl border-4 border-neutral-800 hover:scale-115 duration-100  p-4"><SiTailwindcss size={50} color="cyan" /></div>
            <div className="rounded-xl border-4 border-neutral-800 hover:scale-115 duration-100 p-4"><SiMysql size={50} color="blue" /></div>
            <div className="rounded-xl border-4 border-neutral-800 hover:scale-115 duration-100 p-4"><SiReact size={50} color="cyan" /></div>
            </div>
    </div>
  )
}

export default Technologies