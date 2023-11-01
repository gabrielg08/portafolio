import React, { useState } from 'react';
import { AiOutlineMenu } from "react-icons/ai";

function Navbar() {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  }

  return (
    <nav className='bg-[#1A0B2E] px-10 py-10 mb-12 flex justify-between text-white'>
      <img src="/img/Logo.png" alt="" />
      <ul className='flex items-center'>
        <li onClick={toggleMenu} className='hidden max-[768px]:flex'>
          <AiOutlineMenu />
          {isMenuOpen ? "" : true}
        </li>
      </ul>
      <ul className={isMenuOpen ? "md:flex space-x-4 h-[500px] w-[200px] left-[50%] top-[80px] text-right absolute " : "hidden md:flex space-x-4"}>
        <li className='m-2'><a href="#home">Home</a></li>
        <li className='m-2'><a href="#work_experience">Work Experience</a></li>
        <li className='m-2'><a href="#tech">Technology i use</a></li>
      </ul>
    </nav>
  );
}

export default Navbar;
