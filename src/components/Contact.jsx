import React from 'react'
import { CONTACT } from '../constants/index' 
import { div } from 'framer-motion/client'

const Contact = () => {
  return (
   <div className='flex flex-col justify-center gap-4 mt-8'>
    <h1 className='mx-auto text-4xl text-slate-500 '> Get in <span className='bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-4xl tracking-tight text-transparent'>Touch</span></h1>
    <div className='flex flex-col lg:flex-row gap-4 m-8 items-center justify-center'>
        <div className='flex flex-col rounded-xl border-slate-800m-8 ml-5 mr-15 w-1/3 justify-center p-6 bg-[#b8e3e9]
        '>
            <h1 className='text-2xl text-black '>Address : <span className='text-xl text-slate-800'>{CONTACT.address}</span></h1>
            <h1 className='text-2xl text-black '>Phone : <span className='text-xl text-slate-700'>{CONTACT.phoneNo}</span></h1>
            <h1 className='text-2xl text-black '>Email : <span className='text-xl text-slate-700'>{CONTACT.email}</span></h1>
           

        </div>
        <div className='ml-9'>
            <h1 className=' mx-auto items-center bg-gradient-to-r from-pink-300 via-slate-500 to-purple-500 bg-clip-text text-8xl tracking-tight text-transparent'>Or</h1>
        </div>
        <div className="flex w-1/2 h-[90%] flex-col items-center justify-center bg-transparent">
    <form className=" p-3 rounded-xl bg-gray-600 border-fuchsia-600">
      <h3>Email</h3>
      <input
        className="rounded-xl p-2 border-2 border-[#1d0329] text-black "
        type="text"
        placeholder="Enter you email"
      />
      <h3>Description</h3>
      <textarea
        className="rounded-xl p-2 border-2 border-[#1d0329] text-black "
        name=""
        id=""
        cols="30"
        rows="7"
      ></textarea>


  
  
     
      <button
        className="border-2 text-white mx-2 bg-emerald-400 text-m py-2 px-2 rounded-full"
        type="submit"
      >
        Send
      </button>
    </form>
  </div>
    </div>
   </div>

)
}

export default Contact
