import React, { useState } from 'react';
import { AiOutlineClose, AiOutlineMenu } from 'react-icons/ai';

const Navbar = () => {
  // Correct use of useState hook
  const [nav, setNav] = useState(false);

  const handleNav = () => {
    setNav(!nav);
  };

  return (
    <>
      <div className='sticky top-0 z-50 shadow-md bg-black text-gray-400 h-[100px] w-full mx-auto flex justify-between items-center '>
        <h1 className='primary-color ml-4 text-3xl font-bold bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent'>PORTFOLIO</h1>
        <ul className='hidden md:flex'>
          <li className='p-5 '><a className='p-2 border rounded-xl bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent' href='#home'>Home</a></li>
          <li className='p-5 '><a className='p-2 border rounded-xl bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent' href='#about'>About</a></li>
          <li className='p-5'><a className='p-2 border rounded-xl bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent' href='#work'>Projects</a></li>
          <li className='p-5'><a className='p-2 border rounded-xl bg-gradient-to-r from-yellow-400 via-pink-500 to-purple-600 bg-clip-text text-transparent' href='#contact'>Contact Us</a></li>
        </ul>

        <div onClick={handleNav} className='block md:hidden mr-6'>
          {nav ? <AiOutlineClose size={20} /> : <AiOutlineMenu size={20} />}
        </div>
      </div>

      <div className={nav ? 'fixed h-full left-0 top-0 w-[60%] bg-[#202121] ease-in-out duration-500' : 'fixed left-[-100%]'}>
        <h1 className='text-3xl primary-color m-4 '>PORTFOLIO</h1>
        <ul className='p-8 text-2xl'>
          <li className='p-2'><a href='#home'>Home</a></li>
          <li className='p-2'><a href='#about'>About</a></li>
          <li className='p-2'><a href='#work'>Work</a></li>
          {/* <li className='p-2'><a href='#experience'>Experience</a></li> */}
          <li className='p-2'><a href='#contact'>Contact</a></li>
        </ul>
      </div>
    </>
  );
};

export default Navbar;
