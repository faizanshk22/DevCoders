import React from 'react';
import { FaFacebook, FaLinkedin } from 'react-icons/fa';

function QuickLinks() {
  return (
    <div className='w-full h-[80vh] bg-[#1e1e22] flex flex-col justify-center items-center'>
      <div className='flex flex-col sm:flex-row justify-between max-w-screen-lg w-full px-4 sm:px-8 gap-20 sm:gap-40'>
        {/* Left section with DevCoders and its description */}
        <div className='flex flex-col items-center mb-8 sm:mb-0'>
          <div className='flex items-center mb-6 -ml-[15vw]'>
            {/* Logo */}
            <svg
              width="48"
              height="48"
              viewBox="0 0 100 100"
              fill="none"
              xmlns="http://www.w3.org/2000/svg"
              className='mr-4'
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
            {/* DevCoders text */}
            <div className="text-lg lg:text-3xl font-semibold text-[#61DAFB]">DevCoders</div>
          </div>
          {/* DevCoders description */}
          <div className="text-gray-400 text-xl lg:text-2xl text-left" style={{ whiteSpace: 'nowrap' }}>
            DevCoders offers customized IT solutions<br/>
            designed to suit your specific requirements.<br/>
            Our team of experienced professionals blends<br/>
            technical expertise with innovative thinking<br/>
            to achieve outstanding outcomes.<br/>
            We enable businesses across various industries<br/>
            to excel in today’s digital world.<br/>
            Explore our services to see how
            we can elevate <br/>your organization to new heights.
          </div>
          {/* Social Media Icons */}
          <div className='flex mt-8 space-x-6'>
            <a href="#" target="_blank" rel="noopener noreferrer" className="text-zinc-100 hover:text-blue-500 text-4xl -ml-[13vw]">
              <FaFacebook />
            </a>
            <a href="https://www.linkedin.com/in/faizansheikh5/" target="_blank" rel="noopener noreferrer" className="text-zinc-100 hover:text-blue-500 text-4xl -ml-[13vw]">
              <FaLinkedin />
            </a>
          </div>
        </div>

        {/* Right section with Quick Links and its additional text */}
        <div className='flex flex-col items-center mt-1'>
          {/* Quick Links section */}
          <div className="text-lg lg:text-3xl font-semibold text-white mb-6 -ml-[8vw]">Quick Links</div>
          {/* Links */}
          <div className="text-gray-400 text-xl lg:text-2xl text-left -mr-10">
            <ul className="list-disc pl-8">
              <li><span>To Know Our Web Features</span></li>
              <li><span>Mobile&nbsp;Application&nbsp;Development</span></li>
              <li><span>SEO Optimization</span></li>
              <li><span>DevOps Services</span></li>
              <li><span>Enterprise Solutions</span></li>
              <li><span>Contact</span></li>
            </ul>
          </div>
        </div>
      </div>
    </div>
  );
}

export default QuickLinks;
