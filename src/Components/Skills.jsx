import React from 'react'
import html from '../Assets/html.png'
import css from '../Assets/css.png'
import javascript from '../Assets/javascript.png'
import tailwind from '../Assets/tailwind.png'
import react from '../Assets/react.png'
import bootstrap from '../Assets/bootstrap.jpeg'





const Skills = () => {
  return (
    <>
      <div className='bg-black text-gray-400 md:h-[150px] w-full p-8 border border-gray-600 mx-auto grid grid-cols-3 place-items-center md:flex md:justify-between md:items-center'>

        <h2 className='text-gray-700  text-2xl md:text-4xl font-bold m-4'>
          My <br /> Tech <br /> Stack
        </h2>
        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
          <img src={html} alt="" />
          <p className='mt-2'>HTML</p>
        </div>
        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
          <img src={css} width={100} height={100} alt="" />
          <p className='mt-2'>CSS</p>
        </div>
        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
          <img src={javascript} alt="" />
          <p className='mt-2'>JAVASCRIPT</p>
        </div>
        <div className='flex flex-col items-center m-4 sm:my-0 w-[50px] md:w-[110px]'>
          <img src={bootstrap} alt="" />
          <p className='mt-2'>BootStrap</p>
        </div>
        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
          <img src={tailwind} alt="" />
          <p className='mt-2'>Tailwind</p>
        </div>
        <div className='flex flex-col items-center m-4 sm:my-0 w-[40px] md:w-[100px]'>
          <img src={react} alt="" />
          <p className='mt-2'>React</p>
        </div>

      </div>
    </>
  )
}

export default Skills
