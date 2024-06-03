import React from 'react';
import { FaCircle } from 'react-icons/fa';
import { motion } from 'framer-motion';


function About() {
  const images = [
    '/images/D.jpg',
  ];

  return (
    <div className='w-full min-h-screen bg-[#1e1e22] flex flex-col items-center px-4 md:px-10 py-10'>
      <span className='title text-[#61DAFB] text-xl sm:text-2xl mt-10 text-center'>••• About Digital Innovations •••</span>
      <div className='relative flex flex-col md:flex-row items-start mt-[10vh] w-full md:w-auto'>
        <div className='relative'>
        <motion.div 
            className='absolute top-0 left-0 w-full h-full border-2 border-blue-500 rounded-lg'
            initial={{ x: -20 }}
            animate={{ x: [0, 20, -20, 0] }}
            transition={{ repeat: Infinity, duration: 4, ease: "easeInOut" }}
          ></motion.div>
          <img src={images[0]} alt="About Digital Innovations" className='relative max-w-full md:max-w-md w-full h-auto rounded-lg mb-10 md:mb-0' />
        </div>
        <div className='md:ml-10 flex flex-col'>
          <p className='text-white text-xl sm:text-2xl md:text-4xl lg:text-6xl font-["Founders_Grotesk_X-Condensed"] text-center md:text-left'>
            Feature us for best IT solutions and Services for your business
          </p>
          <div className='mt-6 flex items-start'>
            <div className='relative mt-3 mr-2 flex-none'>
              <div className='absolute left-[-10px] -mt-1 w-6 h-6 bg-transparent border-2 border-[#61DAFB] rounded-full'></div>
              <FaCircle className='text-[#61DAFB]' />
            </div>
            <div>
              <h4 className='text-xl sm:text-2xl md:text-3xl text-white font-semibold'>About Us</h4>
              <p className='text-white text-base sm:text-lg md:text-xl mt-2'>
                At DevCoders we offer IT services for Web and <br className='hidden md:block' /> Mobile Application Development, <br className='hidden md:block' />
                DevOps engineering, and bespoke enterprise solutions.<br className='hidden md:block' /> We are fervently committed to delivering <br className='hidden md:block' />
                exceptional results to our clients, believing <br className='hidden md:block' /> wholeheartedly in our success in achieving excellence.
              </p>
            </div>
          </div>
          <div className='mt-6 flex items-start'>
            <div className='relative mt-3 mr-2 flex-none'>
              <div className='absolute left-[-10px] -mt-1 w-6 h-6 bg-transparent border-2 border-[#61DAFB] rounded-full'></div>
              <FaCircle className='text-[#61DAFB]' />
            </div>
            <div>
              <h4 className='text-xl sm:text-2xl md:text-3xl text-white font-semibold'>Our Mission</h4>
              <p className='text-white text-base sm:text-lg md:text-xl mt-2'>
                We drive business growth with our unwavering commitment to meeting customer needs.<br />
                Our company also develops solutions to help customers achieve their visionary goals.
              </p>
            </div>
          </div>
          <div className='mt-6 flex items-start'>
            <div className='relative mt-3 mr-2 flex-none'>
              <div className='absolute left-[-10px] -mt-1 w-6 h-6 bg-transparent border-2 border-[#61DAFB] rounded-full'></div>
              <FaCircle className='text-[#61DAFB]' />
            </div>
            <div>
              <h4 className='text-xl sm:text-2xl md:text-3xl text-white font-semibold'>Our Vision</h4>
              <p className='text-white text-base sm:text-lg md:text-xl mt-2'>
                Fostering creativity through a diverse team <br className='hidden md:block' /> and adaptable solutions to ensure 
                outstanding <br className='hidden md:block' /> client success in web application development,<br className='hidden md:block' />
                mobile application development, and DevOps engineering.
              </p>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

export default About;
