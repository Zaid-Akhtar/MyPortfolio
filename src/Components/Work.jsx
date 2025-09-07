import React from 'react'
import Proj1 from '../Assets/proj1.png'
import Proj2 from '../Assets/proj2.png'
import Proj3 from '../Assets/proj3.png'
import Proj4 from '../Assets/proj4.png'
import Proj5 from '../Assets/proj5.png'
import Proj6 from '../Assets/proj6.png'


const Work = () => {
  return (
    <>
      <div className='max-w-[1200px] m-8 mx-auto p-5' id='work'>
        <div className='pb-8'>
          <p className='text-4xl mb-3 font-bold bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent'>Work</p>
          <p className='text-gray-400'>Checkout some of my recent work!</p>
        </div>
        <div className='grid sm:grid-cols-2 md:grid-cols-3 gap-4'>


          <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative'>
            <img src={Proj1} layout="fill" objectFit="cover" alt="" />
            <div className='opacity-0 group-hover:opacity-90 bg-[grey] /70 absolute inset-0 flex flex-col justify-center items-center'>

              <span className='text-2xl font-bold text-white tracking-wider'></span>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button>
                </a>
              </div>

            </div>
          </div>
          <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative'>
            <img src={Proj2} layout="fill" objectFit="cover" alt="" />
            <div className='opacity-0 group-hover:opacity-90 bg-[grey] /70 absolute inset-0 flex flex-col justify-center items-center'>

              <span className='text-2xl font-bold text-white tracking-wider'></span>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button>
                </a>
              </div>

            </div>
          </div>
          <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative'>
            <img src={Proj3} layout="fill" objectFit="cover" alt="" />
            <div className='opacity-0 group-hover:opacity-90 bg-[grey] /70 absolute inset-0 flex flex-col justify-center items-center'>

              <span className='text-2xl font-bold text-white tracking-wider'></span>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button>
                </a>
              </div>

            </div>
          </div>
          <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative'>
            <img src={Proj4} layout="fill" objectFit="cover" alt="" />
            <div className='opacity-0 group-hover:opacity-90 bg-[grey] /70 absolute inset-0 flex flex-col justify-center items-center'>

              <span className='text-2xl font-bold text-white tracking-wider'></span>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button>
                </a>
              </div>

            </div>
          </div>
          <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative'>
            <img src={Proj5} layout="fill" objectFit="cover" alt="" />
            <div className='opacity-0 group-hover:opacity-90 bg-[grey] /70 absolute inset-0 flex flex-col justify-center items-center'>

              <span className='text-2xl font-bold text-white tracking-wider'></span>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button>
                </a>
              </div>

            </div>
          </div>
          <div className='transform transition-transform duration-300 hover:scale-105 overflow-hidden shadow-lg shadow-[#040c16] group container rounded-md flex justify-center items-center mx-auto content-div h-[200px] bg-cover relative'>
            <img src={Proj6} layout="fill" objectFit="cover" alt="" />
            <div className='opacity-0 group-hover:opacity-90 bg-[grey] /70 absolute inset-0 flex flex-col justify-center items-center'>

              <span className='text-2xl font-bold text-white tracking-wider'></span>
              <div className='pt-8 text-center'>
                <a href="/">
                  <button className='text-center rounded-lg px-4 py-3 m-2 bg-white text-gray-700 font-bold text-lg'>Live</button>
                </a>
              </div>

            </div>
          </div>
        </div>
      </div>







    </>
  )
}

export default Work
