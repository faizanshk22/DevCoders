import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Link } from 'react-router-dom';

function LandingPage() {
  const lines = [
    "Web Development Solutions & IT Services",
    "Mobile Development Solutions and Services",
    "Search Engine Optimization for better experience of your business",
    "DevOps Engineering and Services"
  ];

  const images = [
    '/images/A.jpg',
    '/images/B.jpg',
    '/images/C.jpg',
    '/images/E.jpg'
  ];

  const [activeIndex, setActiveIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setActiveIndex(prevIndex => (prevIndex === lines.length - 1 ? 0 : prevIndex + 1));
    }, 3000);

    return () => clearInterval(interval);
  }, []);

  const variants = {
    visible: { opacity: 1 },
    hidden: { opacity: 0 }
  };

  const textTransition = { duration: 0.5 };
  const imageTransition = { ease: [0.76, 0, 0.24, 1], duration: 1 };

  return (
    <div className='relative w-full h-screen bg-[#1e1e22] flex flex-col lg:flex-row items-center justify-center lg:justify-between px-4 lg:px-20'>
      <div className="text-container flex flex-col items-center lg:items-start w-full lg:w-1/2 text-center lg:text-left">
        <AnimatePresence mode="wait">
          <motion.div
            key={activeIndex}
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={variants}
            transition={textTransition}
            className="text-xl sm:text-2xl md:text-3xl lg:text-6xl xl:text-8xl font-['Founders_Grotesk_X-Condensed'] text-white mb-6 lg:mb-10"
          >
            {lines[activeIndex] === "Search Engine Optimization for better experience of your business" ? (
              <>
                Search Engine Optimization <br /> for better experience of your business
              </>
            ) : lines[activeIndex] === "Web Development Solutions & IT Services" ? (
              <>
                Web Development Solutions <br /> & IT Services
              </>
            ) : lines[activeIndex] === "Mobile Development Solutions and Services" ? (
              <>
                Mobile Development Solutions <br /> and Services
              </>
            ) : lines[activeIndex] === "DevOps Engineering and Services" ? (
              <>
                DevOps Engineering <br /> and Services
              </>
            ) : (
              lines[activeIndex]
            )}
          </motion.div>
        </AnimatePresence>
        <div className="button-container flex flex-col sm:flex-row space-y-4 sm:space-y-0 sm:space-x-4">
          <Link to="/introduction">
            <button className='flex uppercase items-center justify-center gap-2 sm:gap-7 px-6 py-3 sm:px-10 sm:py-6 bg-zinc-900 rounded-full text-white hover:bg-blue-900 transition duration-300'>
              Get Started &gt;&gt;
            </button>
          </Link>
          <Link to="/exploreservices">
            <button className='flex uppercase items-center justify-center gap-2 sm:gap-7 px-6 py-3 sm:px-10 sm:py-6 bg-zinc-900 rounded-full text-white hover:bg-blue-900 transition duration-300'>
              Explore Services &gt;&gt;
            </button>
          </Link>
        </div>
      </div>
      <div className="image-container flex justify-center items-center w-full lg:w-1/2 mt-10 lg:mt-0">
        <AnimatePresence mode="wait">
          <motion.img
            key={activeIndex} 
            src={images[activeIndex % images.length]} 
            alt="Dynamic"
            initial="hidden"
            animate="visible"
            exit="hidden"
            variants={variants}
            transition={imageTransition}
            className="w-full max-w-xs sm:max-w-sm md:max-w-md lg:max-w-lg h-auto rounded-lg"
          />
        </AnimatePresence>
      </div>
    </div>
  );
}

export default LandingPage;
