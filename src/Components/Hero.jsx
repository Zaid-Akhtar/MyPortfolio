import React from 'react'
import heroImage from '../Assets/Zaid-1.jpeg'
import { TypeAnimation } from 'react-type-animation'

const Hero = () => {
  return (
    <>
      <div className='grid  grid-cols-1 sm:grid-cols-3 gap-8 w-full  md:h-[70vh] mx-auto py-8 bg-black' id='home'>
        <div className='my-auto  mx-auto w-[300px] h-auto lg:w-[400px]'>
            <img src={heroImage} alt="heroImage" />
        </div>
        <div className='col-span-2  px-5'>
            <h1 className='text-white text-4xl sm:text-5xl lg:text-8xl font-extrabold'>

            <span className='primary-color text-6xl font-bold bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent'>
              I'm a 
            </span> <br />
            <TypeAnimation
              sequence={[
                "MERN Stack Dev",
                1000,
                "Web-Designer",
                1000,
                "IT Consultant",
                1000
              ]}
            wrapper='spam'
            speed={50}
            repeat={Infinity}
            />
            </h1>
            <p className='text-white sm:text-lg my-6 lg:text-xl'>
              My name is Zaid Akhtar. <br />
              I have 6 months of experience as <span className='text-2xl font-bold bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent'>Front-End Developer!</span>
            </p>
            <div className='my-8'>
              <a href="/" className='px-6 py-3 w-full rounded-xl mr-4  border border-gray-400 hover:bg-gradient-to-br hover:border-none from-orange-500 to-pink-500 text-white'>Download Resume</a>
              <a href="#contact" className='px-6 py-3 w-full rounded-xl mr-4 border border-gray-400 hover:bg-gradient-to-br from-orange-500 to-pink-500 text-white hover:border-none'>Contact me</a>
            </div>
        </div>
      </div>

    </>
  )
}

export default Hero
