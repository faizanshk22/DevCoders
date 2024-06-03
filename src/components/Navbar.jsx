import React, { useState } from 'react';
import { Menu, X } from 'react-feather'; 

function Navbar({ scrollToSection }) {
  const [isMobileMenuOpen, setMobileMenuOpen] = useState(false);

  const toggleMobileMenu = () => {
    setMobileMenuOpen(!isMobileMenuOpen);
  };

  return (
    <div className='fixed z-[999] w-full px-6 py-4 lg:px-20 lg:py-8 font-["Neue Montreal"] bg-zinc-900 flex justify-between items-center'>
      <div className='logo flex items-center'>
        <svg
          width="40"
          height="40"
          viewBox="0 0 100 100"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
        >
          <rect width="100" height="100" rx="10" fill="#282C34" />
          <path
            d="M 30 35 L 40 45 L 30 55"
            stroke="#61DAFB"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <path
            d="M 70 35 L 60 45 L 70 55"
            stroke="#61DAFB"
            strokeWidth="5"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
          <circle cx="50" cy="70" r="5" fill="#61DAFB" />
        </svg>
        <span className="ml-4 text-lg lg:text-xl font-semibold text-[#61DAFB]">DevCoders</span>
      </div>
      <div className='hidden lg:flex links gap-10'>
        {["Home", "Features", "About", "Services", "Contacts"].map((item, index) => (
          <a
            key={index}
            className='text-base lg:text-lg capitalize font-light text-white cursor-pointer'
            onClick={() => scrollToSection(item.toLowerCase())}
          >
            {item}
          </a>
        ))}
      </div>
      <div className='lg:hidden'>
        <button onClick={toggleMobileMenu} className='text-white'>
          {isMobileMenuOpen ? <X size={24} /> : <Menu size={24} />}
        </button>
      </div>
      {isMobileMenuOpen && (
        <div className='absolute top-16 left-0 w-full bg-[#282C34] flex flex-col items-center py-4 lg:hidden'>
          {["Home", "Features", "About", "Services", "Contacts"].map((item, index) => (
            <a
              key={index}
              className='text-lg capitalize font-light text-white py-2 cursor-pointer'
              onClick={() => {
                toggleMobileMenu();
                scrollToSection(item.toLowerCase());
              }}
            >
              {item}
            </a>
          ))}
        </div>
      )}
    </div>
  );
}

export default Navbar;
